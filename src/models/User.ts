import mongoose from "mongoose";



interface IUser {
	email: string,
	password: string,
	// alarms: IAlarm[]
}

interface UserDoc extends mongoose.Document {
	email: string,
	password: string,
	// alarms: IAlarm[]
}

interface UserModelInterface extends mongoose.Model<UserDoc> {
	build(attr: IUser): UserDoc
}

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	alarms: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Alarm'
		}
	]
}, { timestamps: true })


userSchema.statics.build = (attr: IUser) => {
	return new User(attr)
}

const User = mongoose.model<UserDoc, UserModelInterface>('User', userSchema)

export { User }