import NextAuth from 'next-auth'
const { options } = require('./[...nextauth].js');

const handler = NextAuth(options);

module.exports = {
  GET: handler,
  POST: handler
};
