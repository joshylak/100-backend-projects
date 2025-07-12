    import express from 'express';
    import multer from 'multer';
    import cloudinary from './cloudinary.js';
    import dotenv from 'dotenv';
    import { v4 as uuidv4 } from 'uuid';
    import fs from 'fs';

    dotenv.config();

    const app = express();
    const upload = multer({ dest: 'uploads/' });

    app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) return res.status(400).json({ message: 'No file uploaded' });

        const result = await cloudinary.uploader.upload(file.path, {
        public_id: uuidv4(),
        folder: 'uploads',
        });

        fs.unlinkSync(file.path); // remove temp file

        res.status(200).json({
        message: 'Image uploaded successfully',
        imageUrl: result.secure_url,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Upload failed', error: err.message });
    }
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
