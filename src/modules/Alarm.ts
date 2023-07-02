import mongoose from "mongoose";

const AlarmSchema = new mongoose.Schema({
	time: {
		type: String,
		required: true
	},
	text: {
		type: String,
	},
	condition: {
		type: Boolean
	},
	weekday: {
		type: Array,
		required: true
	}
},
	{ timestamps: true }
)

export default mongoose.model('Alarm', AlarmSchema)