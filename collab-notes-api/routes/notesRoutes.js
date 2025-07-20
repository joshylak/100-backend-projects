import express from 'express';
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  shareNote
} from '../controllers/notesController.js';

const router = express.Router();

router.get('/', getAllNotes);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);
router.post('/:id/share', shareNote);

export default router;
