import express from "express";
import pkg from 'body-parser';
import { authRoute } from "./routes/authRoute.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';
const { json } = pkg;
const port = 5001;
const host = 'localhost';
const db_user = 'sahakyanerrick';
const db_password = 'Z6EWdy0DTQMpV36Q';
const db_name = 'alarm_db';
const app = express();
app.use(json);
app.use(authRoute);
dotenv.config();
async function startServer() {
    try {
        await mongoose
            .connect(`mongodb+srv://${db_user}:${db_password}@alarmclock.kaxbgdi.mongodb.net/${db_name}?retryWrites=true&w=majority`);
        app.listen(port, () => {
            console.log(`Server is connected and listening on port: http://${host}:${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
startServer();
//# sourceMappingURL=main.js.map