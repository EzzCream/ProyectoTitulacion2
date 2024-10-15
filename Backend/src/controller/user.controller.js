import { logger } from '../config/log.config.js';
import { UserModel } from '../model/user.model.js';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
	try {
		const user = req.body;
		const email = req.body.email;
		const userExist = await UserModel.findOne({ email });
		if (userExist) {
			res.status(204).send('User exist');
		} else {
			const newUser = {
				...user,
				password: await bcrypt.hash(user.password, 10, null),
			};
			await UserModel.create(newUser);
			res.status(201).send('User Created');
		}
	} catch (error) {
		logger.error(error);
	}
};

export const login = async (req, res) => {
	try {
		const { userId, password } = req.body;
		const user = await UserModel.findOne({ userId });
		console.log(user);
		if (user) {
			const isValid = await bcrypt.compare(password, user.password, null);
			if (isValid) {
				const userLogged = {
					userId: user.userId,
					name: user.name,
				};
				jwt.sign({ userLogged }, 'secretKey', (err, token) => {
					res.status(202).json({
						token,
						userLogged,
					});
				});
			} else {
				res.status(204).send('Incorrecto');
			}
		}
	} catch (error) {
		logger.error(error);
	}
};
