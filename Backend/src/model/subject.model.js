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
	timePlace: {
		type: Array,
		require: true,
	},
	info: {
		type: String,
		require: true,
	},
});

export const SubjectModel = model('subject', Schema);
