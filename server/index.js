const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const connection = require('./db.config')
connection.once('open', () => console.log('DB Connected :)'))
connection.on('error', () => console.log('Error'))
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('../swagger.json');

app.use(
  '/apis',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

// Routes Config
app.use(express.json({
    extended: false
})) //parse incoming request body in JSON format.
app.use('/', require('../routes/redirect'))
app.use('/api/url', require('../routes/url'))


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT} :D`);
  console.log(`Open swagger on  http://127.0.0.1:${PORT}/apis`);
});
