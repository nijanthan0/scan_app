const express = require('express');
const {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/itemController');

const router = express.Router();
const authenticateToken = require('../middleware/auth');

// Routes
router.get('/', getItems);
router.get('/:id', getItemById);
router.post('/', authenticateToken, createItem);
router.put('/:id', authenticateToken, updateItem);
router.delete('/:id', authenticateToken, deleteItem);

module.exports = router;
