
import { Router } from "express";

 const route = Router()
route.get('/health',
    (req, res) => {
        res.status(200).json({
            status: 'ok',
            message: 'Invoxa API is running',
            timestamp: new Date().toISOString()
        })
    }
)

export default route