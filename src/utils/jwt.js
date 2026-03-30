import jwt from "jsonwebtoken"

export const generateAccessToken = ({userId,role})=>{

   const accessToken = jwt.sign({userId:userId,role:role},process.env.JWT_ACCESS_SECRET,{expiresIn:process.env.JWT_ACCESS_EXPIRES_IN})
   return accessToken
}

export const generateRefreshToken =({userId})=>{
    const refreshToken = jwt.sign({userId:userId},process.env.JWT_REFRESH_SECRET,{expiresIn:process.env.JWT_REFRESH_EXPIRES_IN})
   return refreshToken
}