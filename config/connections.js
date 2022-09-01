// import mongoose module
const { mongoose } = require('mongoose');

// store config uri and process .env as var
const connectionString = 
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';

// connect mongoose to localhost
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// export module as connection
module.exports = connection;

