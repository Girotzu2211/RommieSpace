require('dotenv').config({path:'../.env'})
const express = require('express');
var bodyParser = require('body-parser');

const roomie_space = require('./routes/rommie_space');

const PORT = process.env.PORT || 5000;

const app = express();
var serv = require('http').Server(roomie_space);
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json({})); 
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.json());
app.use(require('./routes/rommie_space'));



app.listen(PORT, () => {
    console.log(`Server is running on ` + PORT);
  });