const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json());

app.post('/validate/phone', [
  body('phone')
    .isMobilePhone('az-AZ')
    .withMessage('Xais olunur duzgun nomre yazin'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.send('Telefon dogrulama ugurlu!');
});

app.listen(3000, () => {
  console.log('3000');
});

