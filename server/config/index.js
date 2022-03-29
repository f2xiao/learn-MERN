// config/index.js
const dbuser = 'xxxxxxxxxx';
const dbpassword = 'xxxxxxxxx';

const MONGODB_URI = `mongodb+srv://${dbuser}:${dbpassword}@cluster0.pcocp.mongodb.net/testing?retryWrites=true&w=majority`;


module.exports = MONGODB_URI;