import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import regRoutes from './routes/regRoutes.js';

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit:'30mb', extended: true }));
app.use(
    cors({
        origin: ['https://refreshing-api.onrender.com/regRoutes/register', 'https://refreshing.onrender.com/']
    })
);

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use('/regRoutes', regRoutes)

//CONNECT TO DATABASE

const CONNECTION_URL = process.env.CONNECTION_URL;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err.message));