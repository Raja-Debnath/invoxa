import { email, ZodError } from "zod"
import { registerUser,loginUser } from "../services/auth.service.js"
import { sendError, sendSuccess } from "../utils/response.js"
import { registerSchemaValid , loginSchemaValid} from "../validations/auth.validation.js"




export const register = async (req, res) => {
    try {
        const validated = registerSchemaValid.parse(req.body)
        const {name,email,password}= validated
        // get data clean data from service afer zod validation
        const userdata = await registerUser( { name, email, password })

        return sendSuccess(
            res,
            201,
            "user registered successfully",
            userdata)

    } catch (error) {
        if (error instanceof ZodError) {
            return sendError(res, 400, error.errors[0].message, "VALIDATION_ERROR")
        }
        return sendError(res, error.statusCode || 500, error.message, error.errorCode || "server error")
    }
}


export const login = async (req, res) => {
    try {
        const validated = loginSchemaValid.parse(req.body)
        const {email,password}=validated
        const userdata = await loginUser({email,password})
        res.status(200).json({
            status: "ok",
            message: "user login",
            timestamp: new Date().toISOString(),
            userdata
        })
    } catch (error) {
  if (error.message === "Invalid credentials") {
    return sendError(res, 401, error, "UNAUTHORIZED")
  }
  return sendError(res, 500, error, "INTERNAL_SERVER_ERROR")
}
}



