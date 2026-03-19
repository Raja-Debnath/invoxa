import 'dotenv/config'

// import from internal files 
import { PORT } from './src/config/env.js'
import app from './src/app.js';

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

})
.on('error',(err)=>{
    if (err.code === 'EADDRINUSE' ){
        console.error(`Port ${PORT} is already in use`);
        process.exit(1)
    }
})
