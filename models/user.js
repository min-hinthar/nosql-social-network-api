// import chema, model, types from mongoose
const { Schema, Model, Types } = require('mongoose');

// create new instance of Schema
const UserSchema = new Schema(
    {
        // username, string
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        // email, string
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'Invalid Email! Please Enter A Valid Email Address']
        },
        // thoughts
        thoughts: [],
        friends: [this]
    },
    {
        // set virtual fields true
        toObject: {
            getters: true,
            virtuals: true,
        },
        toJSON: {
            getters:true,
            virtuals: true
        }
    }
);

// function to show friend count
UserSchema.virtuals('friendCount').get(function(){
    return this.friends.length;
})

// create User model using UserSchema
const User = model('User', UserSchema);

// export module as User
module.exports = User;