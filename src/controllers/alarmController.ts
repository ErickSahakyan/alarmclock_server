// import User from '../modules/User.js'
// import Alarm from '../modules/Alarm.js'
// import { Response, Request } from 'express'

// export const createAlarm = async (req: Request, res: Response) => {
// 	try {
// 		const { time, text, condition, weekday } = req.body;

// 		const newAlarm = new Alarm({
// 			time,
// 			text,
// 			condition,
// 			weekday
// 		});

// 		await newAlarm.save();

// 		await User.findByIdAndUpdate(req.userId, {
// 			$push: { alarms: newAlarm }
// 		});

// 		res.json(newAlarm)
// 	} catch (error) {
// 		console.log(error)
// 		res.status(402).json({
// 			message: 'Что-то пошло не так!'
// 		})
// 	}
// }

// export const getMyAlarms = async (req: Request, res: Response) => {
// 	try {
// 		const user = await User.findById(req.userId)

// 		const list = await Promise.all(
// 			user.alarms.map(alarm => {
// 				return Alarm.findById(alarm._id)
// 			})
// 		)

// 		res.json(list)

// 	} catch (error) {
// 		res.json({
// 			message: 'Что-то пошло не так!'
// 		})
// 	}
// }

// export const toggleCondition = async (req: Request, res: Response) => {
// 	try {
// 		const { id, condition } = req.body
// 		const alarm = await Alarm.findById(id)

// 		alarm?.condition = !condition;

// 		await alarm.save()
// 		res.json(alarm)
// 	} catch (error) {
// 		console.log(error)
// 		res.json({ message: 'Что-то пошло не так!' })
// 	}
// }

// export const removeAlarm = async (req: Request, res: Response) => {
// 	try {
// 		const id = req.params.id
// 		const alarm = await Alarm.findByIdAndUpdate(id)

// 		if (!alarm) {
// 			return res.json({ message: 'Такого будильника не существует' })
// 		}

// 		await User.findByIdAndUpdate(req.userId, {
// 			$pull: { alarms: id }
// 		})

// 		res.json({ id, message: 'Будильник был удалён!' })
// 	} catch (error) {
// 		res.json({ message: 'Не удалось удалить будильник!' })
// 	}
// }

// export const changeAlarm = async (req: Request, res: Response) => {
// 	try {
// 		const { time, text, condition, weekday } = req.body;
// 		const alarm = await Alarm.findById(req.params.id)

// 		alarm.time = time;
// 		alarm.text = text;
// 		alarm.condition = condition;
// 		alarm.weekday = weekday

// 		await alarm.save()

// 		res.json(alarm)
// 	} catch (error) {
// 		res.status(402).json({
// 			message: 'Не удалось обновить данные!'
// 		})
// 	}
// }

// export const duplicateAlarm = async (req: Request, res: Response) => {
// 	try {
// 		const { time, text, condition } = req.body;

// 		const newAlarm = new Alarm({
// 			time,
// 			text,
// 			condition
// 		})

// 		await newAlarm.save();

// 		await User.findByIdAndUpdate(req.userId, {
// 			$push: { alarms: newAlarm }
// 		});

// 		res.json(newAlarm)
// 	} catch (error) {
// 		res.status(402).json({
// 			message: 'Не удалось осуществить дублирование будильника! '
// 		})
// 	}
// }