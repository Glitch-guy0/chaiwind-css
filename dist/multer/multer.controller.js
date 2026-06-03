import { Router } from "express";
const multerRouter = Router();
import multer from "multer";
import MulterService from "./multer.service.js";
const fileHandler = multer({});
const SingleRouter = Router();
const ArrayRouter = Router();
const FieldsRouter = Router();
multerRouter.use("/upload", SingleRouter, ArrayRouter, FieldsRouter);
// single
SingleRouter.post("/single", fileHandler.single("file"), (req, res) => {
    try {
        console.log("hit");
        if (!req.file) {
            console.log("fine not found");
        }
        else {
            MulterService.handleSingleUpload(req.file);
        }
        console.log('not returning?');
        res.sendDate;
        res.end();
    }
    catch (err) {
        console.log("err", err);
        res.end();
    }
});
// array (same name with multiple files on the same)
ArrayRouter.post("/array", fileHandler.array("files[2]", 2), (req, res) => {
    if (!req.files || req.files.length < 2) {
        console.log("less than 2");
        res.status(300);
    }
    res.sendDate = MulterService.handleArrayUpload(req.files);
    res.end();
});
// fields
//
FieldsRouter.post("/fields", fileHandler.fields([
    { name: "avatar", maxCount: 1 },
    { name: "profile", maxCount: 1 },
]), (req, res) => {
    if (!req.files || req.files?.keys?.length < 1) {
        console.log("less keys");
        return res;
    }
    if (MulterService.handleFieldsUpload(req.files)) {
        res.sendStatus(404);
    }
    else {
        res.sendDate;
    }
    return res.end();
});
export default multerRouter;
//# sourceMappingURL=multer.controller.js.map