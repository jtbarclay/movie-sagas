const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    //sql query to return all movies
    const query = `
        SELECT * FROM movies
        ORDER BY title;
    `;

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

router.put('/', (req, res) => {
    //sql query to edit movies table values
    const query = `
        UPDATE movies
        SET "title"=$2, "description"=$3
        WHERE id=$1;
    `;

    pool.query(query, [req.body.id, req.body.title, req.body.description])
        .then((response) => {
            console.log('movies PUT response', response);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('movies PUT error', error);
            res.sendStatus(500);
        })
})

module.exports = router;
