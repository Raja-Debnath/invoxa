/**
 * @param {import('express').Response} res
 * @param {number} statusCode
 * @param {string} message
 * @param {object|null} data
 */

export const sendSuccess = (res,statusCode,message,data=null)=>{
    return res.status(statusCode).json({
        success: true,
        message,
        data
    })
}

export const sendError = (res,statusCode,message,errorCode=null)=>{
    return res.status(statusCode).json({
        success: false,
        message,
        error:{
            code: errorCode,
            statusCode
        }
    })
}