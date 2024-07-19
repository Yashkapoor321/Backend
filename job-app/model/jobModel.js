const mongoose = require("mongoose")


const jobSchema =  new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        default : "NOT AVILABLE"
    },
    company : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required : true
    }
})

const JobSchema = mongoose.model("jobs", jobSchema)  //jobs --> collection  and jobSchema --> field

module.exports = JobSchema