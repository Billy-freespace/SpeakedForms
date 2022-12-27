import mongoose from "mongoose";

const CheckBoxSchema = new mongoose.Schema({
  questionId: String,
  options: {
    type: Array,
    default: [],
  },
  boxesQuantity: {
    type: Number,
    default: 0,
  },
});

const CheckBox = mongoose.model("CheckBox", CheckBoxSchema);
export default CheckBox;
