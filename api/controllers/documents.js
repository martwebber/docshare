const mongoose = require("mongoose");
const Document = require("../models/document");

exports.documents_get_all = (req, res, next) => {
  Document.find()
    .select("owner title description fileUrl _id")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        documents: docs.map(doc => {
          return {
            owner: doc.owner,
            title: doc.title,
            description: doc.description,
            fileUrl: doc.fileUrl,
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:3000/documents/" + doc._id
            }
          };
        })
      };
      res.status(200).json(response);

    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.documents_create_document= (req, res, next) => {
  const document = new Document({
    _id: new mongoose.Types.ObjectId(),
    owner: req.body.owner,
    title: req.body.title,
    description: req.body.description,
    fileUrl: req.file.path
  });
  document
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Document created successfully",
        createdDocument: {
          owner: result.owner,
          title: result.title,
          description: result.description,
          _id: result._id,
          request: {
            type: "GET",
            url: "http://localhost:3000/documents/" + result._id
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.documents_get_document = (req, res, next) => {
  const id = req.params.documentId;
  Document.findById(id)
    .select("owner title description fileUrl _id")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          document: doc,
          request: {
            type: "GET",
            url: "http://localhost:3000/documents"
          }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.documents_update_document = (req, res, next) => {
  const id = req.params.documentId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Document.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Documents updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/documents/" + id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.documents_delete = (req, res, next) => {
  const id = req.params.documentId;
  Document.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Document deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/documents",
          body: { owner: "String", title: "String" }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
