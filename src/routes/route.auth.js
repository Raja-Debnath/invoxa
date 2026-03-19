import { Router } from "express"

import * as authController from "../controllers/controller.auth.js"
const route = Router()

route.post('/register',authController.register)
route.post('/login',authController.login)

export default route