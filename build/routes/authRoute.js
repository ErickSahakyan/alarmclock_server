import express from "express";
import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const router = express.Router();
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const isUsed = await User.findOne({ email });
        if (isUsed) {
            return res.json({
                message: 'Данный пользователь уже занят!',
            });
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = User.build({
            email,
            password: hash,
        });
        const token = jwt.sign({
            id: newUser._id,
        }, 'wjnadwaomdomaomopce wdawd', { expiresIn: '30d' });
        await newUser.save();
        res.json({
            newUser,
            token,
            message: 'Регистрация прошла успешно!',
        });
    }
    catch (error) {
        console.log(error);
        res.json({ message: 'Ошибка при создании пользователя!' });
    }
});
export { router as authRoute };
//# sourceMappingURL=authRoute.js.map