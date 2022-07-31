const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const documentRoutes = require("./api/routes/documents");
const userRoutes = require('./api/routes/user');

// mongoose.connect(
//   "mongodb+srv://admin:" +
//     process.env.MONGO_ATLAS_PW +
//     "@phasetwo-docshare.3xqgmyh.mongodb.net/docshare?retryWrites=true&w=majority"
// );

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Connection successful"))
.catch((err)=>{
  console.log(err)
});
mongoose.Promise = global.Promise;

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/docsharedb',{
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use("/api/documents", documentRoutes);
app.use("/api/user", userRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
