const express = require('express')
const cors = require('cors')
const itemRoutes = require('./Routes/ItemRoutes')

const app = express(); 
require('dotenv').config();
app.use(cors());
app.use(express.json());

app.use('/', itemRoutes);

app.listen(process.env.PORT, () => {
    console.log('Listening on port ', process.env.PORT)
})