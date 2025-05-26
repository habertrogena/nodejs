const express = require("express");
const path = require ('path');
const { title } = require("process");

const app = express();
const port = 3000;

//set the view engine as ejs

app.set('view engine','ejs')

const products = [
  { id: 1, name: "Product One" },
  { id: 2, name: "Product Two" },
  { id: 3, name: "Product One" },
  { id: 4, name: "Product Two" },
];

app.get('/',(req,res)=>{
    res.render('home',{title:'Home',products:products});
})


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});