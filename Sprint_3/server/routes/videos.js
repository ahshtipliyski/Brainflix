const express = require('express');
const router = express.Router();
const videos = require('../data/data.json');


router.get('/videos/:id', (req, res)=> {
    console.log(req.params)
    let currentVideo = req.params.id
    ? videos.find(mainVideo => mainVideo.id === req.params.id)
    : videos;

    res.json(currentVideo)
})

router.get('/videos/:id/comments', (req, res)=> {
    console.log(req.params)
    let currentVideo = req.params.id
    ? videos.find(mainVideo => mainVideo.id === req.params.id)
    : videos;

    res.json(currentVideo.comments)
})


router.post('/videos/:id/comments', (req, res) => {
    console.log(req.params)
    let currentVideo = req.params.id
    ? videos.find(mainVideo => mainVideo.id === req.params.id)
    : videos;

    currentVideo.comments.push(req.body);
    res.json(currentVideo.comments)
  });
  


router.get('/videos', (req, res) => {
    res.json(videos)
});


router.post('/videos', (req, res) => {
    videos.push(req.body);
    res.json(videos)
  });




module.exports = router; 