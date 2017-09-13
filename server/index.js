const express = require('express');
const jsonParser = require('body-parser').json();
const app = express();

app.get('/', (req, res) => res.send('Hello'));

app.post('/signin', jsonParser, (req, res) => {
    res.send(req.body.name);
});

app.listen(3000, () => console.log('Server is running!'));
