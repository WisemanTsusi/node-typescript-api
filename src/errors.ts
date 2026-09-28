export class AppError extends Error{constructor(public readonly statusCode:number,public readonly code:string,message:string,public readonly details?:unknown){super(message);this.name="AppError"}}
export const unauthorized=(m="Authentication required")=>new AppError(401,"UNAUTHORIZED",m);
export const forbidden=(m="Forbidden")=>new AppError(403,"FORBIDDEN",m);
export const notFound=(m="Resource not found")=>new AppError(404,"NOT_FOUND",m);
