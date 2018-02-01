const express = require('express');
const Model = require('./models');
const app = express()
const bodyParser = require('body-parser');
const Student = require('./routes/student');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine','ejs')
app.set('views','./views')

app.get('/',(req,res) => {
  res.render('home')
})
app.use('/student', Student)

app.listen(4000, console.log(`Yaaa Silakaan`));
