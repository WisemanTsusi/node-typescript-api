import { z } from "zod";
const schema=z.object({NODE_ENV:z.enum(["development","test","production"]).default("development"),PORT:z.coerce.number().int().positive().default(3000),LOG_LEVEL:z.enum(["fatal","error","warn","info","debug","trace"]).default("info"),JWT_SECRET:z.string().min(32).default("development-secret-development-secret"),CORS_ORIGIN:z.string().default("*")});
export const config=schema.parse(process.env);
