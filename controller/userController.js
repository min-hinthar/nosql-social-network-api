// import User Model
const { User } = require('../models')

// User model controller
const userModelController = {
    // GET all users
    getUsers(req, res) {
        User.find({})
        // populate Users path Thought
        .popolate({ path: 'Thought', select: '-__V' })
        // populate Users path Friends
        .populate({ path: 'Friends', select: '-__V'})
        .select('-__V')
        .then(UsersDataDB => res.json(UsersDataDB))
        // catch err status 500
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    // GET User by ID
    getUserByID({ params}, res){
        User.findOne({ _id: params.id })
        // populate Users path Thought
        .popolate({ path: 'Thought', select: '-__V' })
        // populate Users path Friends
        .populate({ path: 'Friends', select: '-__V'})
        .select('-__V')
        .then(UsersDataDB => {
            if(!UsersDataDB){
                res.status(404).json({ message: 'Cannot find User with input ID' });
                return;
            }
            res.json(UsersDataDB)
        })
        // catch err status 500
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }

}

// export module as userModelController
module.exports = userModelController;