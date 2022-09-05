// import Router from express
const router = require('express').Router();

// import Thought Controllers 
const {
    getThoughts,
    getThoughByID,
    createThought,
    updateThoughtByID,
    deleteThoughtByID,
    AddReaction,
    DeleteReactionByID,
} = require('../../controller/thoughtController');

// API GET route for getThoughts
router.route('/')
.get(getThoughts);

// API POST route for createThought
router.route('/:userID')
.post(createThought);

// API GET PUT DELETE routes with thoughtID
router.route('/:thoughtID')
.get(getThoughByID)
.put(updateThoughtByID)
.delete(deleteThoughtByID);

// API POST route for addReaction
router.route('/:thoughtID/reactions')
.post(AddReaction);

// API DELETE route for deleteReaction
router.route('/:thoughtID/reactions/:reactionID')
.delete(DeleteReactionByID);

// export module as router
module.exports = router;
