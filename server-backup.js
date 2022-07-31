import express from 'express';
import routes from './api/routes/routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/docsharedb',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// mongoose.connect(process.env.MONGO_URL)
// .then(()=>console.log("connection successful"))
// .catch((err)=>{
//   console.log(err)
// });

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your server is running on port ${PORT}`)
);