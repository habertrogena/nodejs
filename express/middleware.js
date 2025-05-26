const express = require("express");

const app = express();
const port = 3000;

const myFirstMidleware= (req, res, next) =>{
    console.log("First middleware");
    next();
    
}

app.use(myFirstMidleware);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});