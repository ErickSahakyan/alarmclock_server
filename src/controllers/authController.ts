// import User from '../modules/User.js'
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
// import { Response, Request } from 'express'

// // Register user
// export const register = async (req: Request, res: Response) => {
// 	try {
// 		const { email, password } = req.body

// 		const isUsed = await User.findOne({ email })

// 		if (isUsed) {
// 			return res.json({
// 				message: 'Данный пользователь уже занят!',
// 			})
// 		}

		// const salt = bcrypt.genSaltSync(10)
		// const hash = bcrypt.hashSync(password, salt)

// 		const newUser = new User({
// 			email,
// 			password: hash,
// 		})

// 		const token = jwt.sign(
// 			{
// 				id: newUser._id,
// 			},
// 			process.env,
// 			{ expiresIn: '30d' },
// 		)

// 		await newUser.save()

// 		res.json({
// 			newUser,
// 			token,
// 			message: 'Регистрация прошла успешно!',
// 		})
// 	} catch (error) {
		// console.log(error)
		// res.json({ message: 'Ошибка при создании пользователя!' })
// 	}
// }


// export const login = async (req: Request, res: Response) => {
// 	try {
// 		const { email, password } = req.body;

// 		const user = await User.findOne({ email });

// 		if (!user) {
// 			return res.json({
// 				message: 'Такого пользователя не существует'
// 			})
// 		};

// 		const isPasswordCorrect = await bcrypt.compare(password, user.password);

// 		if (!isPasswordCorrect) {
// 			return res.json({
// 				message: "Неверный пароль или имя пользователя!"
// 			})
// 		}


// 		const token = jwt.sign({
// 			id: user._id
// 		}, process.env.JWT_SECRET, { expiresIn: '30d' })

// 		res.json({
// 			token,
// 			user,
// 			message: 'Вы вошли в систему!'
// 		})
// 	} catch (error) {
// 		res.json({
// 			message: 'Ошибка при авторизации!'
// 		})
// 	}
// }


// export const getMe = async (req: Request, res: Response) => {
// 	try {
// 		const user = await User.findById(req.userId);

// 		if (!user) {
// 			return res.json({
// 				message: 'Такого пользователя не существует'
// 			})
// 		};

// 		const token = jwt.sign({
// 			id: user._id
// 		}, process.env.JWT_SECRET, { expiresIn: '30d' });

// 		res.json({
// 			user,
// 			token
// 		})
// 	} catch (error) {
// 		res.json({
// 			message: 'Ошибка при получении пользователя'
// 		})
// 	}
// }

// // email verification
// // password reset
// // password change

// // google auth
// // facebook auth


// // change to typescript