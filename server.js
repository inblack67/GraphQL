const express = require('express');
require('colors');

const app = express();


const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log(`Server started on port ${PORT}`.green.bold);
})