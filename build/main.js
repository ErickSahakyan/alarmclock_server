import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './routes/authRoute.js';
import alarmRoute from './routes/alarmRoute.js';
const app = express();
dotenv.config();
const db_user = process.env.MD_USER;
const db_password = process.env.MD_PASSWORD;
const db_name = process.env.MD_NAME;
const port = process.env.PORT || 6060;
const host = 'localhost';
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoute);
app.use('/api/alarm', alarmRoute);
async function startServer() {
    try {
        await mongoose.connect(`mongodb+srv://${db_user}:${db_password}@alarmclock.kaxbgdi.mongodb.net/${db_name}?retryWrites=true&w=majority`);
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