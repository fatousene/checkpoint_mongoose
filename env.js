const express = require('express');
const mongoose = require('mongoose');
const app = express();

const MONGO_URI ='mongodb+srv://fatou_sene:FatouSene@cluster0.5qj6n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' 
mongoose.connect(MONGO_URI, {
    useNewUrlParser : true, 
    useUnifiedTopology : true
});
module.exports = MONGO_URI;