const express = require("express");
const movieRouter = express.Router();
const {v4: uuid} = require("uuid")

//data
const movies = [
    {title : "Bambi", year: 1991, _id: uuid()},
    {title : "Pokemon", year: 1991, _id: uuid()},
    {title : "Lion King", year: 1991, _id: uuid()},
    {title : "Snow White", year: 1991, _id: uuid()}
]


movieRouter.route("/")
    .get( (req, res) => {
    res.send(movies);
})
    .post( (req, res) => {
    const newMovie = {...req.body, _id: uuid()};
    movies.push(newMovie);
    res.send(`Movie ${newMovie.title} was added to the database.`)
})
    
movieRouter.route("/:movieId")
    .delete((req, res) => {
        
        movies.splice(index, 1);
        res.send("Successfully deleted movie.");
    })
    .put((req, res) => {
        const requestedMovieId = req.params.movieId;
        const index = movies.findIndex(movie => movie._id === requestedMovieId);
        const updateObj = req.body;
        const updatedMovie = Object.assign(movies[index], updateObj);
        res.send(updatedMovie);
    })




module.exports = movieRouter;