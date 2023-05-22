const express = require('express');
const cors = require('cors');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();

const models = [];

fs.createReadStream('./data.csv')
  .pipe(csv())
  .on('data', (data) => models.push(data))
  .on('end', () => {
    console.log('Models loaded:', models);
  });

app.use(express.json());
app.use(cors());

app.get('/models/:model', (req, res) => {
  res.json(models);
});

app.get('/models/:model', (req, res) => {
  const { model } = req.params;
  const foundModel = models.find((m) => m.model === model);
  if (!foundModel) {
    return res.status(404).json({ message: `Model with name ${model} not found` });
  }
  const { length,freight,trailer,boatEngineAndTrailerFees,engineRigging,enginePreRigPrice,nmma,engineFreight,msrp } = foundModel;
  res.json({ length,freight,trailer,boatEngineAndTrailerFees,engineRigging,enginePreRigPrice,nmma,engineFreight,msrp });
});

app.listen(30010, () => {
  console.log('Server started on port 30010');
});