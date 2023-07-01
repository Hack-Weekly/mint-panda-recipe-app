import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import * as dotenv from "dotenv";
import { StatusCodes } from 'http-status-codes';
import { ingredientsRouter } from './features/ingredients/ingredients.routes';
import { errorHandler } from './middlewares/error-handler';
import { recipesRouter } from './features/recipes/recipes.routes';

dotenv.config();

export const port = process.env.PORT || 5000;
export const app = express();

app.use(morgan('dev'))
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use(express.json())

// Routers
app.use("/api/ingredients", ingredientsRouter);
app.use("/api/recipes", recipesRouter);

// Error Handler Middleware
app.use(errorHandler);

app.use("*", (req, res) => {
	res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid Request" });
});