import User from '../modules/User.js';
import Alarm from '../modules/Alarm.js';
export const createAlarm = async (req, res) => {
    try {
        const { time, text, condition, weekday } = req.body;
        const newAlarm = new Alarm({
            time,
            text,
            condition,
            weekday
        });
        await newAlarm.save();
        await User.findByIdAndUpdate(req.userId, {
            $push: { alarms: newAlarm }
        });
        res.json(newAlarm);
    }
    catch (error) {
        console.log(error);
        res.status(402).json({
            message: 'Что-то пошло не так!'
        });
    }
};
//# sourceMappingURL=alarmController.js.map