    import multer from 'multer';
    import path from 'path';
    import fs from 'fs';

    const uploadDir = 'uploads';

    if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
    }

    const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) =>
        cb(null, `${Date.now()}-${file.originalname}`)
    });

    const upload = multer({ storage });

    export default upload;
