const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors')


const app = express();
app.use(
    cors({
        origin: "http://localhost:3000"
    })
)
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const db = process.env.MONGODB_URI

mongoose.connect(db, ()=>console.log('connected'), {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);
app.use(require('./routes'));


app.listen(PORT, () => console.log(`Connected to Port ${PORT}`));