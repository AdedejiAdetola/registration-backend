import mongoose from "mongoose";

const registerSchema = mongoose.Schema({
    payer: { type: String, required: true},
    email: { type: String, required: true},
    phoneNumber: { type: String, required: true},
    numberOfPeople: {type: Number, required: true},
    owners:{ type: Object, required: true}, //name of person being paid for
    conference: { type: String, required: true},
    association: { type: String, required: true},
    church: { type: String, required: true}
})

export default mongoose.model('Registration', registerSchema);