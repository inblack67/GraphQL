const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const Schema = require('./schema/Schema');

// env and mongo
const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });
const connectDB = require('./connectDB');
connectDB();

require('colors');

const app = express();


app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true // GUI for testing queries
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log(`Server started on port ${PORT}`.green.bold);
})