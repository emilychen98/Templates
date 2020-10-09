const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Items.js');

/**
 * @route   GET api/items
 * @desc    Get All Items
 * @access  Public
 */
router.get('/', async (req, res) => {
  Item.find()
    .sort({ date: -1}) // -1 = descending
    .then(items => res.json(items))
});

/**
 * @route   POST api/items
 * @desc    Create An Item
 * @access  Public
 */
router.post('/', async (req, res) => {
    const newItem = new Item({ // Item = name of model
        name: req.body.name // using body parser
    }) 

    newItem.save().then(item => res.json(item));
});

/**
 * @route   DELETE api/items/:id
 * @desc    Delete An Item
 * @access  Public
 */
router.delete('/:id', async (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then( () => res.json({success: true}))) 
        .catch(err => res.status(404).json({success: false}));
})

module.exports = router;
