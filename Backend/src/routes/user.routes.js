import { Router } from 'express';
import * as User from '../controller/user.controller.js';

const router = Router();

router.post('/signup', User.signup);
router.post('/login', User.login);
router.get('/ayuda', (req, res) => {
	res.send('Ayuda');
});

export default router;
