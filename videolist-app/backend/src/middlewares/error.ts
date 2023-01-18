import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
  let statusCode = 500;
  console.error("[ERROR MIDDLEWARE]", err);

  if (err.message.includes("The URL already exists in DB"))
    statusCode = 400;

  if (err.message.toLowerCase().includes("cast to objectid failed for value")) {
    statusCode = 400;
    err.message = "Invalid ID"
  }

  if (err.message.toLowerCase().includes("not found"))
    statusCode = 404;
  res.status(statusCode).json({
    status: "error",
    message: err.message
  });
}
