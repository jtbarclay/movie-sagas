const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {
    //sql query to return all movies
    const query = `
        SELECT m.*, array_agg(g.name) as "genres" from movies_genres mg
        JOIN movies m ON m.id=mg.movie_id
        JOIN genres g ON g.id=mg.genre_id
        GROUP BY m.id
        ORDER BY m.title
        LIMIT $1
        OFFSET $2;
    `;

    pool.query(query, [req.body.limit, req.body.offset])
        .then((response) => {
            console.log('movies GET response', response);
            res.send(response.rows)
        })
        .catch((error) => {
            console.log('movies GET error', error);
            res.sendStatus(500);
        })
})

router.get('/', (req, res) => {
    //get row count
    const query = `
        SELECT COUNT(*) FROM movies;
    `;

    pool.query(query)
        .then((response) => {
            console.log('/movies row count reesponse', response);
            res.send(...response.rows)
        })
        .catch((error) => {
            console.log('/movies row count error', error);
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
