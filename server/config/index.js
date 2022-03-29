// config/index.js
const dbuser = 'pixie';
const dbpassword = '3TpO49E55UtO204o';

const MONGODB_URI = `mongodb+srv://${dbuser}:${dbpassword}@cluster0.pcocp.mongodb.net/testing?retryWrites=true&w=majority`;

const config = {
    port:  process.env.port || 3000,
    jwtSecret: process.env.JWT_SECRET || 'mkT23j#u!45',
    URI: process.env.MONGODB_URI || MONGODB_URI,
}

export default config;