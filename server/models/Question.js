import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  formId: String,
  question: {
    type: String,
    default: "Question",
    max: 1024,
  },
  shortAnswer: Object,
  longAnswer: Object,
  multipleOption: Object,
  checkbox: Object,
});

const Question = mongoose.model("Question", QuestionSchema);
export default Question;
