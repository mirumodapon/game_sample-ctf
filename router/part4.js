const express = require('express');
const Router = express.Router();

const fs = require('fs').promises;
const cookieParser = require('cookie-parser')();
Router.get(
    '/',
    (req, res) => {
        res.cookie('verift', "m1qEUvMEZ6tj48Q9OmlSDvRVzZu6v83d")
        res.sendFile('./part4/part4.html', { root: `${__dirname}/../File` })
    }
)

Router.get(
    '/T0KagvJUoIwH1RD68GZWj2vDiI66FSIj',
    [cookieParser],
    (req, res) => {
        const { verift } = req.cookies;
        //res.clearCookie('verift');
        if (verift === "m1qEUvMEZ6tj48Q9OmlSDvRVzZu6v83d") {
            res.sendFile('./part4/part4-enter.html', { root: `${__dirname}/../File` })
        } else {
            res.redirect('/part4');
        }
    }
)

Router.get(
    '/part4-image',
    async (req, res) => {
        const file = await fs.readFile('./File/part4/output.jpg');
        res.send(file);
    }
)

Router.post(
    '/enter',
    (req, res) => {
        if (req.body.password === '2mFwdP886cqIfJy2F3PFPNr02T5dsOPT') {
            res.sendFile('./part4/Corr.html', { root: `${__dirname}/../File` })
        } else {
            res.send('You get Wrong');
        }
    }
)

module.exports = Router;