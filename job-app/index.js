const express = require("express")
const mongoose = require("mongoose")
const jobRoutes = require("./route/jobRoute.js")

const port = 10000
const app = express()


mongoose.connect("mongodb+srv://yash88887777:cVjFojPoZ5aegzKJ@cluster0.f3c4ma6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")             
.then(() => console.log("Database connected Sucessfully"))
.catch((err) => console.log("Error is present", err))

//Middlewares
app.use(express.json())

//Routes
app.use(jobRoutes);

app.listen(port, ()=> console.log(`Server is running at port ${port}`))

