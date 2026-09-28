import type {User} from "../types.js";
export interface UserRepository{findByEmail(email:string):Promise<User|undefined>;findById(id:string):Promise<User|undefined>}
const users:User[]=[{id:"usr_admin",email:"admin@example.com",name:"Demo Admin",role:"admin"},{id:"usr_user",email:"user@example.com",name:"Demo User",role:"user"}];
export class InMemoryUserRepository implements UserRepository{async findByEmail(email:string){return users.find(u=>u.email===email)} async findById(id:string){return users.find(u=>u.id===id)}}
