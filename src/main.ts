// import express, { Express } from "express";
// import mongoose from "mongoose";
// import dotenv from 'dotenv'
// import cors from 'cors'

// import authRoute from './routes/authRoute.js'
// import alarmRoute from './routes/alarmRoute.js'


// const app: Express = express();
// dotenv.config()

// // Constants
// const db_user = process.env.MD_USER;
// const db_password = process.env.MD_PASSWORD;
// const db_name = process.env.MD_NAME;
// const port = process.env.PORT || 6060;
// const host = 'localhost'

// // Middleware
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())


// // Routes
// app.use('/api/auth', authRoute)
// app.use('/api/alarm', alarmRoute)



// async function startServer() {
// 	try {
// 		await mongoose.connect(
// 			`mongodb+srv://${db_user}:${db_password}@alarmclock.kaxbgdi.mongodb.net/${db_name}?retryWrites=true&w=majority`
// 		)

// 		app.listen(port, () => {
// 			console.log(`Server is connected and listening on port: http://${host}:${port}`)
// 		})
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

// startServer()




import express from "express";
import pkg from 'body-parser'
import { authRoute } from "./routes/authRoute.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'




const { json } = pkg
const port = 5001
const host = 'localhost'
const db_user = 'sahakyanerrick';
const db_password = 'Z6EWdy0DTQMpV36Q';
const db_name = 'alarm_db'

const app = express()


app.use(json)
// app.use(authRoute)
app.use('/api/auth', authRoute)
dotenv.config()



async function startServer() {
	try {
		await mongoose
			.connect(
				`mongodb+srv://${db_user}:${db_password}@alarmclock.kaxbgdi.mongodb.net/${db_name}?retryWrites=true&w=majority`
			)

		app.listen(port, () => {
			console.log(`Server is connected and listening on port: http://${host}:${port}`)
		})
	} catch (error) {
		console.log(error)
	}
}

startServer()


