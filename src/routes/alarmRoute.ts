import express from 'express';
// import { checkAuth } from '../utils/checkAuth.js'
import { createAlarm } from '../controllers/alarmController.js';
// import { getMyAlarms, createAlarm, duplicateAlarm, toggleCondition, changeAlarm, removeAlarm } from '../controllers/alarmController.js'

const router = express.Router()

// router.get('/user/me', checkAuth, getMyAlarms)
router.post('/', createAlarm)
// router.post('/duplicate', checkAuth, duplicateAlarm)
// router.delete('/:id', checkAuth, removeAlarm)
// router.put('/toggle', checkAuth, toggleCondition)
// router.put('/:id', checkAuth, changeAlarm)

export default (): express.Router => {
	return router;
};