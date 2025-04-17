const express = require('express');
const app = express();
const db = require('./db');
require("dotenv").config();
app.use(express.json());

app.get('/', (req, res) => {
    try {
        res.send('Hello from Express+MySQL!');
    } catch (error) {
        res.status(500).send('An error occurred');
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});