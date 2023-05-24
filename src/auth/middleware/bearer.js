'use strict';

const jwt = require('jsonwebtoken');
const { users } = require('../models/index.js');

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Error('Invalid Login');
    }

    const token = req.headers.authorization.split(' ').pop();
    const decodedToken = jwt.verify(token, process.env.SECRET); // Replace 'process.env.SECRET' with the environment variable holding your actual secret key used for signing the tokens

    const username = decodedToken.username;
    const validUser = await users.findOne({ where: { username } });

    if (!validUser) {
      throw new Error('Invalid Login');
    }

    req.user = validUser;
    req.token = token;

    next();
  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }
};
