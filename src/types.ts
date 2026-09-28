export type Role="admin"|"user";
export interface User{id:string;email:string;name:string;role:Role}
export interface Task{id:string;title:string;description:string;status:"todo"|"in_progress"|"done";ownerId:string;createdAt:string;updatedAt:string}
