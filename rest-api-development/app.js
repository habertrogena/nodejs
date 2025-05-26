const express = require("express");

const app = express();
const port = 3000;

const books =[
  {id:1, title:"Book1", author:"Author1"},
  {id:2, title:"Book2", author:"Author2"},

]

//middleware 
app.use(express.json());

app.get('/',(req,res)=>{
  res.json({
    message: 'Welcome to the home page'
  })

});

//get all books route
app.get('/books',(req,res)=>{
res.json(books)
})


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});