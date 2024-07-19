const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const { size } = req.query;
  const limit = size ? parseInt(size, 10) : 10; // Usando el parámetro de consulta `size`
  const categories = [];
  for (let index = 0; index < limit; index++) {
    categories.push({
      name: faker.company.name,
      image: faker.image.url(), // Corrigiendo el método para obtener una URL de imagen
    });
  }
  res.json(categories);
});

/*
router.router('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
  });
});
 */

module.exports = router;
