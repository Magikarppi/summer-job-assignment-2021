const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3003;
const productsRouter = require('./routers/productsRouter');
const availabilityRouter = require('./routers/availabilityRouter');

morgan.token('data', (req, res) => {
  JSON.stringify(req.body);
});

const loggerFormat = ':data ":method :url" :status :response-time';

app.use(morgan(loggerFormat));
app.use(cors());

app.use('/api/products', productsRouter);
app.use('/api/availability', availabilityRouter);

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
