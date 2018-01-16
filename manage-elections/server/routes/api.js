const express = require('express');
const router = express.Router();
const axios = require('axios');

const API = 'https://jsonplaceholder.typicode.com';

// Get all posts
router.get('/selectors', (req, res) => {

  // use another api - mock
  axios.get(`${API}/users`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;