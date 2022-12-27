import mongoose from "mongoose";

const PresentationSchema = new mongoose.Schema({
  settingId: String,
  progressBar: {
    type: Boolean,
    default: false,
  },
  randomOrder: {
    type: Boolean,
    default: false,
  },
  confirmationMsg: {
    type: String,
    default: "Se ha enviado correctamente el formulario.",
  },
});

const Presentation = mongoose.model("Presentation", PresentationSchema);
export default Presentation;
