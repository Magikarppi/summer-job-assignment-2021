const fetch = require('node-fetch');
const productsRouter = require('express').Router();

const API_PRODUCTS_BASE_URL =
  'https://bad-api-assignment.reaktor.com/v2/products/';

productsRouter.get('/:product', async (req, res) => {
  try {
    const product = req.params.product;
    const fetch_res = await fetch(API_PRODUCTS_BASE_URL + product);
    const jsonData = await fetch_res.json();
    console.log('jsondata', jsonData);
    res.json(jsonData);
  } catch (error) {
    console.log(error);
    response.status(400).send({ error: error.message });
  }
});

module.exports = productsRouter;
