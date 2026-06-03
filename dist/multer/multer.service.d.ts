export default class MulterService {
    static handleSingleUpload(file: Express.Multer.File): boolean;
    static handleArrayUpload(files: Express.Multer.File[] | {
        [fieldname: string]: Express.Multer.File[];
    } | undefined): boolean;
    static handleFieldsUpload(files: Express.Multer.File[] | {
        [fieldname: string]: Express.Multer.File[];
    }): boolean;
}
//# sourceMappingURL=multer.service.d.ts.map