const express = require('express');
const Router = express.Router();
const cookieParser = require('cookie-parser')();
const fs = require('fs').promises;
const axios = require('axios');
Router.get(
    '/',
    [cookieParser],
    (req, res) => {
        const { verift } = req.cookies;
        if (verift === 'VsDkfSVjHcrUGIh9aCMwEU88Bc4cKB')
            res.sendFile('./HTML/part3.html', { root: `${__dirname}/..` })
        else
            res.redirect('/part1');
    }
)

Router.post(
    '/',
    (req, res) => {
        if (req.body.password === 'NMtM03EWRsEia1ymeVq3') {
            res.clearCookie('verift');
            res.sendFile('./HTML/Corr.html', { root: `${__dirname}/..` });
            axios.get('https://api.telegram.org/bot1217070906:AAGAl84imiPHLR7-iZ36zLXH2e0_4D82So8/sendMessage?chat_id=1157109940&text=CTF_PASS_part3');
        } else {
            res.send('You get Wrong');
        }
    }
);

Router.get(
    '/file',
    async (req, res) => {
        const file = await fs.readFile('./File/file');
        res.send(file);
    }
)

module.exports = Router;