const express = require("express");
const cors = require("cors");
const app = express();
const port = 8181;

app.use(cors());

const products = [
    { id: 1, name: "Smartphone", price: 500 },
    { id: 2, name: "Laptop", price: 1200 },
    { id: 3, name: "Headphones", price: 150 },
];

app.get("/products", (req, res) => res.json(products));

app.get("/products/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    product ? res.json(product) : res.status(404).send("Product not found");
});

app.listen(port, () => console.log(`Backend running on http://localhost:${port}`));

