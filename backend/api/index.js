import serverless from 'serverless-http';
const app = require('../src/server'); 

export default serverless(app);
