// Upload pictures/images and videos to the website
// A multer was used for uploading

// The multer setting has started...

const multer = require("multer");
const path = require("path");

// storage setting

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const uploads = multer({
    storage,
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext != ".jpg" && ext != ".png" && ext != ".jpeg") {
            const err = new Error("Fayl extnameda xatolik bor...");
            err.code = 404;
            return cb(err);
        }
        cb(null, true);
    },
    preservePath: true
});

module.exports = uploads;