const {getItems, getItemById} = require('../Controller/itemController');

const router = require('express').Router();

router.get('/items', getItems);
router.get('/items/:id', getItemById);

module.exports = router;