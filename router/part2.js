const express = require('express');
const Router = express.Router();

const cookieParser = require('cookie-parser')();

Router.post(
    '/',
    [cookieParser],
    async (req, res) => {
        const { password } = req.body;
        res.cookie('authority', 'client');
        if (password === 'bXlzcGVye0wwRGxaNkhNeTRSMk0xaUdXUmprfQyL') {
            const { authority } = req.cookies;
            if (authority === 'admit') {
                // NMtM03EWRsEia1ymeVq3
                res.cookie('verift', 'VsDkfSVjHcrUGIh9aCMwEU88Bc4cKB');
                res.sendFile('./HTML/part2.html', { root: `${__dirname}/..` });
            } else {
                res.sendFile('./HTML/part2-uncookie.html', { root: `${__dirname}/..` });
            }
        } else
            res.redirect('/part1');
    }
)
module.exports = Router;