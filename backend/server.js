const express = require("express")
const app = express()

app.use(express.json())

// ENV
const dotenv = require("dotenv")
dotenv.config()

// MongoDB
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () =>
  console.log("Connected to the database!")
)

// Routes
app.use("/api/register", require("./routes/Register.js"))
app.use("/api", require("./routes/Loginout"))
app.use("/api/getuser", require("./routes/GetUser"))

// Connect
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log("Server is runninng right now!"))
