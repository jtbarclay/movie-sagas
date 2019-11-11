require('dotenv').config();
const axios = require('axios');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {

    // default limit and offset
    let limit = req.body.limit || 3;
    let offset = req.body.offset || 0;
    console.log('limit2: ', limit, 'offset2: ', offset);
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

    pool.query(query, [limit, offset])
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

// tmdb serach api
router.post('/search', (req, res) => {
    const searchQuery = req.body;

    const path = 'https://api.themoviedb.org/3/search/movie'

    const params = {
        api_key: process.env.TMDB_API_KEY,
        language: 'en-US',
        query: searchQuery,
        page: '1',
        include_adult: 'false',
    };

    axios.get(path, { params })
        .then((response) => {
            console.log('tmdb GET response', response);
            res.send(response.data)
        })
        .catch((error) => {
            console.log('tmdb GET error', error);

        })
});

// tmdb config for img url
router.get('/config', (req, res) => {

    const path = 'https://api.themoviedb.org/3/configuration'

    const params = {
        api_key: process.env.TMDB_API_KEY,
    };

    axios.get(path, { params })
        .then((response) => {
            console.log('tmdb GET config response', response);
            res.send(response.data)
        })
        .catch((error) => {
            console.log('tmdb GET config error', error);

        })
});

// add a new movie
router.post('/add', (req, res) => {
    //sql query to return all movies
    const query = `
        WITH ins1 AS(
        INSERT INTO "movies" ("title", "poster", "description")
        VALUES ($1, $2, $3)
        RETURNING id AS movie_id)
        INSERT INTO "movies_genres" ("movie_id", "genre_id")
        SELECT movie_id, '14' FROM ins1;
    `;

    pool.query(query, [req.body.title, `https://image.tmdb.org/t/p/w500${req.body.poster_path}`, req.body.overview])
        .then((response) => {
            console.log('movies POST response', response);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('movies POST error', error);
            res.sendStatus(500);
        })
})

module.exports = router;
