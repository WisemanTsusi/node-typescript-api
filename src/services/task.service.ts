import {randomUUID} from "node:crypto"; import {forbidden,notFound} from "../errors.js"; import type {TaskRepository} from "../repositories/task.repository.js"; import type {Task,User} from "../types.js";
export class TaskService{constructor(private repository:TaskRepository){}
async list(user:User){return this.repository.list(user.role==="admin"?undefined:user.id)}
async get(id:string,user:User){const t=await this.repository.findById(id);if(!t)throw notFound("Task not found");this.assertAccess(t,user);return t}
async create(user:User,input:{title:string;description:string}){const now=new Date().toISOString();return this.repository.create({id:`task_${randomUUID()}`,title:input.title,description:input.description,status:"todo",ownerId:user.id,createdAt:now,updatedAt:now})}
async update(id:string,user:User,patch:Partial<Pick<Task,"title"|"description"|"status">>){const t=await this.get(id,user);const u=await this.repository.update(t.id,patch);if(!u)throw notFound("Task not found");return u}
async delete(id:string,user:User){const t=await this.get(id,user);if(!(await this.repository.delete(t.id)))throw notFound("Task not found")}
private assertAccess(t:Task,u:User){if(u.role!=="admin"&&t.ownerId!==u.id)throw forbidden("You do not have access to this task")}}
