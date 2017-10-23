const express = require('express');
const app = express();
app.set('port', (process.env.PORT || 5000))
  .get('/', (request, response) =>
    response.sendFile(__dirname + '/index.html'))
  .use(express.static(__dirname));

app.listen(app.get('port'), () =>
  console.log('Node app is running on port', app.get('port'))
);