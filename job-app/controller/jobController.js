const JobModel = require("../model/jobModel.js");
 
 //  create job logic (Method : post)
const createJob = async (req, res)=> {    
    try{
    console.log(req.body);
    const insertNewJob = await JobModel.create(req.body)
    console.log(insertNewJob);                       
    res.json({
        success: true,
        message : "Job Created succesfully"
    })
    }catch (err) {
       console.log(err);
       res.json({
        success : false,
        message : "Something went wrong, please try again after sometime"
       })
    }
}


 // Read job logic (Method : get)
const listJob = async (req, res)=> {       
    try{
    const jobList = await JobModel.find()
    console.log("list job");
    res.json({
        success : true,
        message : "List of Jobs",
        result : jobList
    })
    }catch(err){
        console.log(err);
        res.json({
         success : false,
         message : "Something went wrong"
        })
    }
  
}


 // Update job logic (method : put)
const updateJob = async (req,res)=> {   
    try{
        console.log(req.params.id);
    const updateObj = {
        $set : req.body
    }
    const jobDataUpdated = await JobModel.findByIdAndUpdate(req.params.id, updateObj) 
    console.log(jobDataUpdated);

    res.json({
        success : true,
        message : "job data is updated"
    })
    }catch(err){
      console.log("job updating error", err);
      res.json({
        success : false,
        message : "job data not updated"
       })
    }
    
}


 // Delete job logic (Method : delete)
const deleteJob = async (req, res) => {    
    console.log(req.params.id);
    try {
        const jobDeleted = await JobModel.findByIdAndDelete(req.params.id)
         res.json({
        success : true,
        message : "Job deleted Succesfully"
    })
    } catch (err) {
        console.log("job not deleted", err);
        res.json({
            success : false,
            message : "job not deleted"
           })
    } 
}

const jobController = {
    createJob,
    listJob,
    updateJob,
    deleteJob
}

module.exports = jobController