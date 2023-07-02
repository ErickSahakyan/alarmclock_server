import express from 'express';
// import { register, login, getMe } from '../controllers/authController.js'
// import { checkAuth } from '../utils/checkAuth.js'


const router = express.Router()

// Register
// router.post('/register', register)

// Login
// router.post('/login', login)

// Get Me
// router.get('/me', checkAuth, getMe)

export default (): express.Router => {
	return router;
};