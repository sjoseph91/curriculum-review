const express = require("express");
const morgan = require("morgan");
const app = express();


//middleware
app.use(express.json())
app.use(morgan("dev"));

app.use('/bounty', require("./routes/BountyRouter"));


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
