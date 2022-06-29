require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const { connectDB } = require('./config/db');
const userRouter = require('./routes/users');

const app = express();

connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.ENV === 'development') {
	app.use(morgan('dev'));
}

app.use('/user', userRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
