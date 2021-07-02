require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;
const app = express();
// const morgan = require('morgan');
const path = require('path');
const hbs = require('hbs');

const { indexRouter } = require('./src/routes/index.router');
const { categoryRouter } = require('./src/routes/category.router');

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'src', 'views', 'partials'));
app.set('views', path.join(__dirname, 'src', 'views'));
// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/category', categoryRouter);

app.listen(PORT, () => {
  console.log(`Server has been started on PORT: ${PORT}`);
});
