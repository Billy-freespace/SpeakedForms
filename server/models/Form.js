import mongoose from "mongoose";

const FormSchema = new mongoose.Schema(
  {
    userID: String,
    title: {
      type: String,
      default: "Untitled",
      max: 60,
    },
    subtitle: {
      type: String,
      default: "",
      max: 120,
    },
    questions: {
      type: Array,
      default: [],
    },
    questionsQuantity: {
      type: Number,
      default: 0,
    },
    answers: Object,
    settings: Object,
    usersAnswers: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Form = mongoose.model("Form", FormSchema);
export default Form;
