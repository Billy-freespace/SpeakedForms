import mongoose from "mongoose";

const LongAnswerSchema = new mongoose.Schema({
  questionId: String,
  maxLength: Number,
  userAnswer: {
    type: String,
    default: "",
  },
});

const LongAnswer = mongoose.model("LongAnswer", LongAnswerSchema);
export default LongAnswer;
