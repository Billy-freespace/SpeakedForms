import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({
  formId: String,
  quantity: {
    type: Number,
    default: 0,
  },
  average: {
    type: Number,
    default: 0,
  },
});

const Answer = mongoose.model("Answer", AnswerSchema);
export default Answer;
