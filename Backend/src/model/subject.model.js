import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	subjectId: {
		type: String,
		require: true,
	},
	teacherId: {
		type: String,
		require: true,
	},
});
