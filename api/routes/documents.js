const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');
const DocumentsController = require('../controllers/documents');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './frontend/public/uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get("/", DocumentsController.documents_get_all);

router.post("/", upload.single('fileUrl'), DocumentsController.documents_create_document);

router.get("/:documentId", DocumentsController.documents_get_document);

router.patch("/:documentId", checkAuth, DocumentsController.documents_update_document);

router.delete("/:documentId", DocumentsController.documents_delete);

module.exports = router;