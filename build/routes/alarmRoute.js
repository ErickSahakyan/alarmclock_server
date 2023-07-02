import express from 'express';
import { createAlarm } from '../controllers/alarmController.js';
const router = express.Router();
router.post('/', createAlarm);
export default () => {
    return router;
};
//# sourceMappingURL=alarmRoute.js.map