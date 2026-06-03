import express from 'express';
import type { AddressInfo } from 'net';

const app = express();
const localhost = 'http://localhost:';
const server = app.listen(0, () => {
  console.log('server is running on port', `${localhost}${(server.address() as AddressInfo).port}`)
})