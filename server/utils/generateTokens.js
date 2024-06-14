const jwt = require('jsonwebtoken');
const jwtConfig  = require('../configs/jwtConfig');
require('dotenv').config();
/**
 * 
 * @param {User} payload 
 * @returns 
 */
function generateTokens(payload) {
	console.log(process.env);
    return {
      accessToken: jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, jwtConfig.access),
      refreshToken: jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, jwtConfig.refresh),
    };
  }
  

module.exports = generateTokens;