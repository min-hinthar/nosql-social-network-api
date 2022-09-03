// import mongoose module
const { mongoose } = require('mongoose');

// store config uri and process .env as var
const connectionString = 
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/friendsDB';

// connect mongoose to localhost
mongoose.connect(connectionString, {
    //useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// export module as connection
module.exports = mongoose;

