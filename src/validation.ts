import type {NextFunction,Request,Response} from "express"; import {z} from "zod"; import {AppError} from "./errors.js";
export function validateBody<T extends z.ZodType>(schema:T){return(req:Request,_res:Response,next:NextFunction)=>{const r=schema.safeParse(req.body);if(!r.success){next(new AppError(400,"VALIDATION_ERROR","Request body failed validation",r.issues));return}req.body=r.data;next()}}
export const createTaskSchema=z.object({title:z.string().trim().min(1).max(120),description:z.string().trim().max(2000).default("")});
export const updateTaskSchema=createTaskSchema.partial().extend({status:z.enum(["todo","in_progress","done"]).optional()});
export const tokenSchema=z.object({email:z.string().email(),password:z.string().min(1)});
