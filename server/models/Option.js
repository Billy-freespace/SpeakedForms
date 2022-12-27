import mongoose from "mongoose";

const OptionSchema = new mongoose.Schema({
  multipleOptionId: String,
  text: {
    type: String,
    default: "Option",
  },
  correctAnswer: {
    type: Boolean,
    default: false,
  },
});

const Option = mongoose.model("Option", OptionSchema);
export default Option;
