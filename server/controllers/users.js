import User from "../models/User";
import Form from "../models/Form";

// Read
export const getUser = (req, res) => {
  try {
    const { id } = req.params;
    const user = User.findById(id);
    res.status(200).json({ user });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getForms = async (req, res) => {
  try {
    const { id } = req.params;
    const user = User.findById(id);

    const forms = await Promise.all(user.forms.map((id) => Form.findById(id)));
    const formattedForms = forms.map(({ _id, title, usersAnswers }) => {
      return { _id, title, usersAnswers };
    });
    res.status(200).json(formattedForms);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const editForm = async (req, res) => {
  try {
    const { id } = req.params;
    const form = Form.findById(id);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
