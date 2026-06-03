export default class MulterService {
    static handleSingleUpload(file) {
        console.log("hit multer file");
        return true;
    }
    static handleArrayUpload(files) {
        console.log("hit");
        return true;
    }
    static handleFieldsUpload(files) {
        console.log("hit");
        return true;
    }
}
//# sourceMappingURL=multer.service.js.map