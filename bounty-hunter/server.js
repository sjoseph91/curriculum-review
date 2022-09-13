const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");


//middleware
app.use(express.json())
app.use(morgan("dev"));

//connecting to db
mongoose.connect('mongodb://localhost:27017/bounty-hunter-2022', () => console.log("Connected to the db"))

app.use('/bounty', require("./routes/BountyRouter"));

app.use((err, req, res, next) => {
  return res.send({errMsg: err.message})
})

app.listen(9000, () => {
  console.log(`Bounty Hunter is listening on port 9000`)
})

//gracefull shutdown
process.on('SIGTERM', () => {
  debug('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    debug('HTTP server closed')
  })
})
