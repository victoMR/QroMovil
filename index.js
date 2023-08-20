const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const session = require('express-session');
const usrRuta = require('./routes/usruta');

dotenv.config();

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: process.env.SECRETO_SESSION,
    resave: true,
    saveUninitialized: true
}));

var port = process.env.PORT || 8181;

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});

app.use("/", usrRuta);