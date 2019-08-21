var mongoose = require('mongoose');

var schema = mongoose.Schema;
var empschema = new schema({
    //eid:String,
    eid:{type:String,required:true},
    name:String,
    salary:Number
});
//third parameter is optional and used as table name; if not given adds s to fisrst parameter to form table name 
var empmodel = mongoose.model("employee",empschema,"Books");

module.exports = empmodel;