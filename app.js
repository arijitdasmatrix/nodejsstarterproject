const express = require("express");
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const profileRoutes = require("./api/routes/profile");
const db = require("./utils/database");
const multer = require('multer');
const cors = require('cors');
var allowlist = ['http://localhost:3000', 'http://localhost:5000']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}



const storage = multer.diskStorage({
destination:(req,res, cb) => {
cb(null,'Images')
},
 filename:(res,file,cb) => {
console.log(file);
cb(null,Date.now() + path.extname(file.originalname) )
}
});

const upload = multer({storage:storage});
app.use(cors());
app.use('/Users',profileRoutes);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/Images', express.static(path.join(__dirname, './Images')))

app.post("/upload",cors(corsOptionsDelegate) , upload.single("image"), (req,res ) => {
console.log(req.files);  
res.status(200).send({
message:"Image Uploaded successfully",
file:`localhost:5000/${req.file.path}`  
});
});

app.post('/multipleUploads', cors(corsOptionsDelegate) , upload.array('images', 10), function(req, res) {
res.status(200).send({message:"Image Uploaded successfully",file:req.files.map(function(element){
    delete  element.fieldname;
    delete  element.originalname;
    delete element.encoding;
    delete element.mimetype;
    delete element.destination;
    delete element.filename;
    delete element.size;
    return element.link = `localhost:5000/${element.path}`;
  })
});
});

// parse application/json
app.use(bodyParser.json());
app.use((req,res,next) => {
const error = new Error("404 Not found");
error.status = 404;
next(error);
});

app.use((error,req,res,next ) => {
res.status(error.status || 500);
res.json({
error: {
  message:error.message  
}
}); 
});

module.exports = app;