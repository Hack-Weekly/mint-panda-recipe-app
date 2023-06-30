import { NextFunction, Request, Response } from "express";
/*
* an HOF that will take a controller and wrap with try catch function, 
* if some exception that was throw in the controller level, this will catch it,
* and will proceed to the error-handler.ts
*/
export const wrapper = (fn: Function) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await fn(req, res, next);
		} catch (error) {
			next(error);
		}
	};
};