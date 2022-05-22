const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));
app.use(express.json()); 

app.set('view engine', 'ejs');
app.use('/', require('./routes/index'));

app.listen(8080, ()=>console.log(`Server running at localhost:${PORT}`));