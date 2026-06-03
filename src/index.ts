import express from 'express';

const app = express();

const server = app.listen(0, () => {
  console.log('server is running on port', server.address())
})