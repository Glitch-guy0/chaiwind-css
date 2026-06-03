import express from 'express';
import type { AddressInfo } from 'net';
import multerRouter from './multer/multer.controller.js';

const app = express();
const localhost = 'http://localhost:';
app.use(multerRouter)
const server = app.listen(3000, () => {
  console.log('server is running on port', `${localhost}${(server.address() as AddressInfo).port}`)
})