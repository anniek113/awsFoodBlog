const express = require('express')
const serverless = requiere("serverless-http");
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/info', (request, response) => {
    response.send("Hello, you are talking to a Lamda")
});

module.exports.handler = serverless(app)