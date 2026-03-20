import 'dotenv/config'

// import from internal files 
import { PORT } from './src/config/env.js'
import app from './src/app.js';
import { connectDB,disconnectDB } from './src/config/db.js';

const startServer = async() =>{

    
    await connectDB() // connect db as server starts
    
    
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    
    }) // stop server if port is busy
    .on('error',(err)=>{
        if (err.code === 'EADDRINUSE' ){
            console.error(`Port ${PORT} is already in use`);
            process.exit(1)
        }
    })

    // if server crashes 
    process.on("uncaughtException",async(err)=>{
        console.error(`uncaughtException`,err);
        await disconnectDB()
        process.exit(1)
    })

    // if rejected promis is not handled 

    process.on("unhandledRejection",async(err)=>{
        console.error(``,err);
        await disconnectDB()
        process.exit(1)
    })

    // system restart from pm2 etc services 

    process.on("SIGTERM",async()=>{
        console.log(`System restart/stop via pm2 etc services`);
        await disconnectDB()
        process.exit(0) 
    })

    // ctrl + c in dev mode 

    process.on("SIGINT",async()=>{
        console.log(`Server stoped via terminal`);
        await disconnectDB()
        process.exit(0)
    })
}
startServer()
