import { Router } from 'express';
import { checkAuth } from '../utils/checkAuth.js';
import { getMyAlarms, createAlarm, duplicateAlarm, toggleCondition, changeAlarm, removeAlarm } from '../controllers/alarmController.js';
const router = new Router();
router.get('/user/me', checkAuth, getMyAlarms);
router.post('/', checkAuth, createAlarm);
router.post('/duplicate', checkAuth, duplicateAlarm);
router.delete('/:id', checkAuth, removeAlarm);
router.put('/toggle', checkAuth, toggleCondition);
router.put('/:id', checkAuth, changeAlarm);
export default router;
//# sourceMappingURL=alarmRoute.js.map