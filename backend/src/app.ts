import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import * as dotenv from "dotenv";
import { StatusCodes } from 'http-status-codes';
import { index } from './routes';

dotenv.config();

export const port = process.env.PORT || 5000;
export const app = express();

app.use(morgan(':id :method :url :response-time'))
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use("/", index);


app.use("*", (req, res) => {
	res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid Request" });
});