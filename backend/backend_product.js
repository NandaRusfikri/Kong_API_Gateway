const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const products = [
  { id: 1, name: 'Sendal' },
  { id: 2, name: 'Sepatu' },
  { id: 3, name: 'baju' },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const user = products.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('products not found');
  res.json(user);
});

app.post('/api/products', (req, res) => {
  const user = {
    id: products.length + 1,
    name: req.body.name,
  };
  products.push(user);
  res.json(user);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
