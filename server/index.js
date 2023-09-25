const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const cors = require('cors');
require('dotenv').config();

const jwt = require('jsonwebtoken')

const app = express();
const PORT = 3060;

app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));