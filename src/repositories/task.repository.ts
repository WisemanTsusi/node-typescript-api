import type {Task} from "../types.js";
export interface TaskRepository{list(ownerId?:string):Promise<Task[]>;findById(id:string):Promise<Task|undefined>;create(t:Task):Promise<Task>;update(id:string,p:Partial<Pick<Task,"title"|"description"|"status">>):Promise<Task|undefined>;delete(id:string):Promise<boolean>}
export class InMemoryTaskRepository implements TaskRepository{
 private tasks=new Map<string,Task>();
 async list(ownerId?:string){const all=[...this.tasks.values()];return ownerId?all.filter(t=>t.ownerId===ownerId):all}
 async findById(id:string){return this.tasks.get(id)}
 async create(t:Task){this.tasks.set(t.id,t);return t}
 async update(id:string,p:Partial<Pick<Task,"title"|"description"|"status">>){const t=this.tasks.get(id);if(!t)return undefined;const u={...t,...p,updatedAt:new Date().toISOString()};this.tasks.set(id,u);return u}
 async delete(id:string){return this.tasks.delete(id)}
}
