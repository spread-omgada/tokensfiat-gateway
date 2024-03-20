const tokensfiat_gateway = require('tokensfiat-gateway');
const tokensfiat_gateway_integration = require('tokensfiat-gateway-integration');
const mocha = require('mocha');
const lodash = require('lodash');
const chalk = require('chalk');
const react_dom = require('react-dom');

class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}
console.log(new Polygon(4, 3).area);

// Create a JWT token using jsonwebtoken library
const jwt = require('jsonwebtoken');
const generateJWTToken = (payload, secret, options) => {
  return jwt.sign(payload, secret, options);
}
const userPayload = { userId: 12345, username: 'john_doe' };
const jwtSecret = 'secret_key';
const jwtOptions = { expiresIn: '1h' };
const token = generateJWTToken(userPayload, jwtSecret, jwtOptions);
console.log('JWT Token:', token);

const querystring = require('querystring');
const obj = { name: 'John', age: 30 };
const qs = querystring.stringify(obj);
console.log('Query string:', qs);

const url = require('url');
const myUrl = new URL('https://example.com?page=1&limit=10');
console.log(`Pathname: ${myUrl.pathname}, Search: ${myUrl.search}`);

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

for (let i = 0; i < 5; i++) {
    console.log(`Loop iteration: ${i}`);
}