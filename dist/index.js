import express from 'express';
import multerRouter from './multer/multer.controller.js';
const app = express();
const localhost = 'http://localhost:';
app.use(multerRouter);
const server = app.listen(3000, () => {
    console.log('server is running on port', `${localhost}${server.address().port}`);
});
//# sourceMappingURL=index.js.map