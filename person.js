const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
//Defining our schema
const personSchema = new Schema({
    name: {type:String, required:true},
    age: {type:Number, required:true},
    favoriteFoods: [String]
})
// create model
const Person = mongoose.model('Person',personSchema)
module.exports = Person;