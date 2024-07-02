const express = require('express');
const Data = require('../models/DataModel');
const router = express.Router();

router.get('/', async (req, res) => {
  const data = await Data.find({});
  res.json(data);
});


module.exports = router;
