import { PrismaClient } from '@prisma/client';

import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ 
  connectionString: process.env.DATABASE_URL 
})

const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'development' 
    ? ['query', 'error', 'warn'] 
    : ['error'],
})


export const connectDB = async()=>{
    try {
       await prisma.$connect();
       console.log(`Connected to DB Sucessfully`);
       
    } catch (error) {
        console.error(`DB connect error`, error)
         process.exit(1)
    }
}
export const disconnectDB = async()=>{
    try {
         await prisma.$disconnect(); 
         console.log(`DisConnected to DB Sucessfully`);
         
    } catch (error) {
       console.error(`DB Disconnect error`, error)
        process.exit(1)
        
    }
}
export default prisma