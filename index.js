const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded());
app.use(express.json());
app.use('/', require('./router/part1'));
app.use('/part2', require('./router/part2'));
app.use('/part3', require('./router/part3'));

const server = app.listen(
    PORT,
    () => console.log(`Serving on the port ${PORT}...`)
)