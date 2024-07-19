const express = require("express")
const mongoose = require("mongoose")
const jobRoutes = require("./route/jobRoute.js")

const port = 10000
const app = express()


mongoose.connect("mongodb://localhost:27017/job-app")              // job-app is a database 
.then(() => console.log("Database connected Sucessfully"))
.catch((err) => console.log("Error is present", err))

//Middlewares
app.use(express.json())

//Routes
app.use(jobRoutes);

app.listen(port, ()=> console.log(`Server is running at port ${port}`))

