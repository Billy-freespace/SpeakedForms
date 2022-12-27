import mongoose from "mongoose";

const BoxSchema = new mongoose.Schema({
  checkBoxId: String,
  text: {
    type: String,
    default: "Box",
  },
  correctAnswer: {
    type: Boolean,
    default: false,
  },
});

const Box = mongoose.model("Box", BoxSchema);
export default Box;
