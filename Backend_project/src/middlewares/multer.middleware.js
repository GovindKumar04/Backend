import multer from "multer";
import mime from 'mime-types';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp') 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, `${file.fieldname}-${uniqueSuffix}.${mime.extension(file.mimetype)}`.replace(/\\/g, '/'));
  }
})

export const upload = multer({ storage: storage })