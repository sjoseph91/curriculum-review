const express = require("express");
const app = express();


//Middleware
app.use(express.json())

//routes
app.use("/people", require("./routes/PeopleRouter"));
app.use("/movies", require("./routes/MovieRouter"));


app.listen(9000, () => console.log("The server is running at port 9000"));

