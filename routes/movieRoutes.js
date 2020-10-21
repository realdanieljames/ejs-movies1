const router = require('express').Router();
const axios = require('axios')

const api_key = require('../key')
let nowPlayingURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`

// Using router create a route /movies
//===================================================================================//
//===================================================================================//
router.get('/movies', (req, res) => {
    axios
        .get(nowPlayingURL)
        .then((results) => {
            let nowPlayingPosters = results.data.results

            // posters.forEach((element) => {
            //     console.log(element.poster_path)
            // });

            // console.log(posters)

            // let images = results.images
            // return res.render('main/url', { images: images });
            return res.render('main/url', { posters: nowPlayingPosters });

        })
        .catch((err) => {
            console.log(err);
        })


})


module.exports = router;