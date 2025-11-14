import serverless from 'serverless-http';
const app = require('../src/index'); 

export default serverless(app);
