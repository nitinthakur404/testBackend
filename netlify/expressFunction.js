// netlify/expressFunction.js
const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/.netlify/functions/express', (req, res) => {
    res.json({
        message: 'Hello from Express.js serverless function!'
    });
});

module.exports.handler = serverless(app);