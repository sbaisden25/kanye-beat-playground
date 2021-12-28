const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', function(req, res){
  res.sendFile('home.html', { root: __dirname + "/public" } );
});

app.get('/runaway',function(req,res){
  res.sendFile(path.join(__dirname+'/public/runaway.html'));
});

app.get('/famous',function(req,res){
  res.sendFile(path.join(__dirname+'/public/famous.html'));
});

app.get('/goodmorning',function(req,res){
  res.sendFile(path.join(__dirname+'/public/goodmorning.html'));
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));