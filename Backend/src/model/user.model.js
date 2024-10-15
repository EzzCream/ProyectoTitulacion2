import mongoose, { model } from 'mongoose';

const Schema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	userId: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		require: true,
	},
});

export const UserModel = model('user', Schema);
