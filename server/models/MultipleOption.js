import mongoose from "mongoose";

const MultipleOptionSchema = new mongoose.Schema({
  questionId: String,
  options: {
    type: Array,
    default: [],
  },
  optionsQuantity: {
    type: Number,
    default: 0,
  },
});

const MultipleOption = mongoose.model("MultipleOption", MultipleOptionSchema);
export default MultipleOption;
