import mongoose from "mongoose";
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
}, { timestamps: true });
userSchema.statics.build = (attr) => {
    return new User(attr);
};
const User = mongoose.model('User', userSchema);
export { User };
//# sourceMappingURL=User.js.map