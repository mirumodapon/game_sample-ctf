const express = require('express');
const Router = express.Router();

Router.get(
    '/',
    (req, res) => res.redirect('/part1')
)

Router.get(
    '/part1',
    async (req, res) => {
        res.sendFile('./HTML/part1.html', { root: `${__dirname}/..` });
    }
);

Router.get(
    '/password',
    [],
    async (req, res) => {
        res.sendFile('./HTML/password.html', { root: `${__dirname}/..` });
    }
);

Router.get(
    '/enter',
    async (req, res) => {
        res.sendFile('./HTML/enter.html', { root: `${__dirname}/..` });
    }
)

module.exports = Router;