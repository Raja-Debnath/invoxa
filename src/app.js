import express from 'express'

// import routes 
import health from './routes/index.js'
import authRouter from './routes/route.auth.js'


const app = express()
app.use(express.json())

// middleswares 
app.use('/api',health) // health check - /api/health
app.use('/api/auth',authRouter) // auth /api/auth/*



export default app