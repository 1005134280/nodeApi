const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const { size } = req.query;
  const limit = size ? parseInt(size, 10) : 10; // Usando el parámetro de consulta `size`
  const products = [];
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(), // Corrigiendo el método para obtener una URL de imagen
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  // const id= req.params.id;  // asi se hace de una forma normal en java
  // esto siguiente es como se hace es ems6
  const { id } = req.params;

  res.json({
    name: 'Product 2',
    price: 2000,
  });
});

module.exports = router;

// este es el pasado sin meterle la libreria faker
/* app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Prduct 1',
      price: 1000,
    },
    {
      name: 'Product 2',
      price: 2000,
    },
  ]);
});
 */
