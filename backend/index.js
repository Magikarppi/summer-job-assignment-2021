const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3003;
const productsRouter = require('./routers/productsRouter');

morgan.token('data', (req, res) => {
  JSON.stringify(req.body);
});

const loggerFormat = ':data ":method :url" :status :response-time';

app.use(morgan(loggerFormat));
app.use(cors());

app.use('/api/products', productsRouter);

// const API_PRODUCTS_BASE_URL =
//   'https://bad-api-assignment.reaktor.com/v2/products/';

// const API_MANUFACTURER_BASE_URL =
//   'https://bad-api-assignment.reaktor.com/v2/availability/manufacturer';

// app.get('/api/:product', async (req, res) => {
//   try {
//     const product = req.params.product;
//     const fetch_res = await fetch(API_PRODUCTS_BASE_URL + product);
//     const jsonData = await fetch_res.json();
//     console.log('jsondata', jsonData);
//     res.json(jsonData);
//   } catch (error) {
//     console.log(error);
//     response.status(400).send({ error: error.message });
//   }
// });

app.get('api/:manufacturer', async (req, res) => {
  try {
    const manufacturer = req.params.manufacturer;
    const fetch_res = await fetch(API_MANUFACTURER_BASE_URL + manufacturer);
    const jsonData = await fetch_res.json();
    res.json(jsonData);
  } catch (error) {
    console.log(error);
    response.status(400).send({ error: error.message });
  }
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
