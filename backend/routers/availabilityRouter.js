const fetch = require('node-fetch');
const availabilityRouter = require('express').Router();

const API_PRODUCTS_BASE_URL =
  'https://bad-api-assignment.reaktor.com/v2/availability/';

availabilityRouter.get('/:manufacturer', async (req, res) => {
  try {
    const manufacturer = req.params.manufacturer;
    const fetch_res = await fetch(API_PRODUCTS_BASE_URL + manufacturer);
    const jsonData = await fetch_res.json();
    res.status(200).send(jsonData.response);
  } catch (error) {
    console.log(error);
    response.status(400).send({ error: error.message });
  }
});

module.exports = availabilityRouter;
