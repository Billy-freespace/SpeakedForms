import mongoose from "mongoose";

const ShortAnswerSchema = new mongoose.Schema({
  questionId: String,
  maxLength: Number,
  userAnswer: {
    type: String,
    default: "",
  },
});

const ShortAnswer = mongoose.model("ShortAnswer", ShortAnswerSchema);
export default ShortAnswer;
