require('dotenv').config();

const firstName = process.env.FIRST_NAME;
const alias = process.env.ALIAS;

console.log(firstName);
console.log(alias);