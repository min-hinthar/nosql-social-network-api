
const {getUsers} = require('../controller/userController')
const router = require('express').Router();

router.get('/', async (req, res) => {
    const users = getUsers();
    res.json(users)
})

module.exports = router;