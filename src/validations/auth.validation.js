import * as z from "zod";

export const registerSchemaValid = z.object({
    name:z.string().min(2),
    email:z.email(),
    password:z.string().min(8),
    role:z.enum(['OWNER','ACCOUNTANT','VIEWER']).optional().default('OWNER')

})

export const loginSchemaValid = z.object({
    email:z.email(),
    password:z.string().min(8)
})