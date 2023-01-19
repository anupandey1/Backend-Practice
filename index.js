const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const rateLimiter = require('./middleware/rateLimiter.js');
dotenv.config();

const router = require('./routes/router.js');
//1234509876
const app = express();
app.use(rateLimiter);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', function (req, res) {
  res.send('Hello, World!');
});

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`Server is running at port ${port}`);
});
