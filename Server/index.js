import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import routes from "./routes/index.js"

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

app.use("/api",routes)

const PORT = process.env. PORT || 8000

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

