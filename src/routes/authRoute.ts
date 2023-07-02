// import { express } from 'express';
// import express from 'express';
// import { register, login, getMe } from '../controllers/authController.js'
// import { checkAuth } from '../utils/checkAuth.js'


// const router = express.Router()

// Register
// router.post('/register', register)

// Login
// router.post('/login', login)

// Get Me
// router.get('/me', checkAuth, getMe)

// export default (): express.Router => {
// return router;
// };



import express, { Request, Response } from "express";
import { User } from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router()


router.post('/register', async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body
		const isUsed = await User.findOne({ email })

		if (isUsed) {
			return res.json({
				message: 'Данный пользователь уже занят!',
			})
		}
		const salt = bcrypt.genSaltSync(10)
		const hash = bcrypt.hashSync(password, salt)

		const newUser = User.build({
			email,
			password: hash,
		})

		const token = jwt.sign(
			{
				id: newUser._id,
			},
			'wjnadwaomdomaomopce wdawd',
			{ expiresIn: '30d' },
		)

		await newUser.save()

		res.json({
			newUser,
			token,
			message: 'Регистрация прошла успешно!',
		})
	} catch (error) {
		console.log(error)
		res.json({ message: 'Ошибка при создании пользователя!' })
	}
})


export { router as authRoute }