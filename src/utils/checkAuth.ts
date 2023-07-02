// import jwt from 'jsonwebtoken'
// import { Request, Response, NextFunction } from 'express'

// export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
// 	const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

// 	if (token) {
// 		try {
// 			const decoded: string | undefined = jwt.verify(token, process.env.JWT_SECRET)

// 			req.userId = decoded.id

// 			next();
// 		} catch (error) {
// 			return res.json({
// 				message: 'Нет доступа!'
// 			})
// 		}
// 	} else {
// 		return res.json({
// 			message: 'Нет доступа!'
// 		})
// 	}
// }