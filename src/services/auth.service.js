import prisma from '../config/db.js'
import bcrypt from 'bcrypt'
import { Prisma } from '@prisma/client'
import { generateAccessToken, generateRefreshToken } from '../utils/jwt.js'
import e from 'express'

export const registerUser = async ({ name, email, password }) => {
    try {

        const hashedPass = await bcrypt.hash(password, 12)

        const userdata = await prisma.user.create({
            data: {
                name, email: email.toLowerCase(), password: hashedPass
            }
        })
        // clear password
        const { password: _, ...userWithoutPassword } = userdata
        return userWithoutPassword


    } catch (error) {
        // check dublicate from prima @unique key
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            const err = new Error('Email already exists')
            err.statusCode = 409
            err.errorCode = 'DUPLICATE_EMAIL'
            throw err
        }
        throw error
    }
}

export const loginUser = async ({ email, password }) => {


    const userExist = await prisma.user.findUnique({
        where: { email: email.toLowerCase() }
    })
    if (!userExist) {
        throw new Error("Invalid credentials")
    }
    const comparePass = await bcrypt.compare(password, userExist.password)
    if (!comparePass) {
        throw new Error("Invalid credentials")
    }
    const accessToken = generateAccessToken({ id: userExist.id, role: userExist.role })
    const refreshToken = generateRefreshToken({ id: userExist.id })

    await prisma.refreshToken.create({
        data: {
            token: refreshToken,
            userId: userExist.id,
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        }
    })
    return {
        accessToken,
        refreshToken,
        user: {
            id: userExist.id,
            name: userExist.name,
            email: userExist.email,
            role: userExist.role
        }
    }

}