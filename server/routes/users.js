import express from "express";
import {
  getUser,
  getForms,
  createForm,
  editForm,
  updateForm,
  removeForm,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Read
router.get("/:id", verifyToken, getUser);
router.get("/:id/forms", verifyToken, getForms);
router.get("/:id/formId", verifyToken, editForm);

// Create
router.post("/:id/createForm", verifyToken, createForm);

// Update
router.patch("/:id/formId", verifyToken, updateForm);

// Delete
router.delete("/:id/formId", verifyToken, removeForm);

export default router;
