const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//route to get all products
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Product 1",
    },
    {
      id: 2,
      name: "Product 2",
    },
    {
      id: 2,
      name: "Product 3",
    },
  ];

  res.json(products);
});

//route to get a single product
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const products = [
    {
      id: 1,
      name: "Product 1",
    },
    {
      id: 2,
      name: "Product 2",
    },
    {
      id: 3,
      name: "Product 3",
    },
  ];

  const singleProduct= products.find(product=> product.id===id);

  if(singleProduct){
    res.json(singleProduct);
  }else {
    res.status(404).json({message: "Product not found"});
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
