const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const uri = process.env.DB_CONNECT;
const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

const authRoute = require('./routes/auth');

app.use(express.json());

// Connect to DB
async function connectToDB() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log('Pinged deployment. Successfully connected to MongoDB!');
  } catch (err) {
    console.log(err);
  }
}
connectToDB();

app.use('/api/user', authRoute);

app.listen(PORT, () => console.log(`Server is listening at PORT : ${PORT}`));
