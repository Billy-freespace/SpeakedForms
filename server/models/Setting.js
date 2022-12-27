import mongoose from "mongoose";

const SettingSchema = new mongoose.Schema({
  formId: String,
  voiceCommands: {
    type: Boolean,
    default: true,
  },
  quiz: {
    type: Boolean,
    default: false,
  },
  presentation: Object,
  shortAnswerMaxLength: {
    type: Number,
    default: 150,
  },
  longAnswerMaxLength: {
    type: Number,
    default: 500,
  },
});

const Setting = mongoose.model("Setting", SettingSchema);
export default Setting;
