const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    //sql query to return all movies
    const query = '';

    pool.query(query)
        .then((response) => {
            console.log('movies GET response', response);
            res.send(response.rows)
        })
        .catch((error) => {
            console.log('movies GET error', error);
            res.sendStatus(500);
        })
})

module.exports = router;
