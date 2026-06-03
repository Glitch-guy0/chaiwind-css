// index signature
type multerArray = {
  [fieldname: string]: File[];
};

export default class MulterService {
  public static handleSingleUpload(file: Express.Multer.File) {
    console.log("hit multer file")
    return true;
  }
  public static handleArrayUpload(files: Express.Multer.File[] | { [fieldname: string]: Express.Multer.File[] }| undefined) {
    console.log("hit")
    return true;
  }
  public static handleFieldsUpload(files: Express.Multer.File[] | { [fieldname: string]: Express.Multer.File[]; }) {
    console.log("hit")
    return true;
  }
}
