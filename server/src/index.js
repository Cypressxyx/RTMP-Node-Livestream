const express = require('express');
const mediaServer = require('./mediaServer');

const PORT = process.env.PORT || 3000;
mediaServer.run();

const app = express();
app.listen(PORT, () => {
  console.log('Server for app is now running on: ', PORT);
});
