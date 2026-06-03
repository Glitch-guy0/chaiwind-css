import express from 'express';
import { platform } from 'process';
const app = express();
const localhost = 'http://localhost:';
const server = app.listen(0, () => {
    console.log('server is running on port', `${localhost}${server.address().port}`);
    console.log("platform", platform);
});
//# sourceMappingURL=index.js.map