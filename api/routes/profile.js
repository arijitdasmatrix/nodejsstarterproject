const express = require('express');
const router = express.Router();
const cors = require('cors');
const profileController = require("../controllers/profile");
const bodyParser = require('body-parser');
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


 router.get('/', cors(corsOptionsDelegate),profileController.getAllUsers);
 router.post('/',bodyParser.json(),cors(corsOptionsDelegate),profileController.addNewProfile);
 router.post('/userdetails/:userid',bodyParser.json(),cors(corsOptionsDelegate),profileController.getUserDetails);

 router.patch('/:userid', cors(corsOptionsDelegate),(req,res,next) => {
 const id = req.params.userid;
 res.status(200).json({
 id:id,
 message:"Update successful"
 });
 });

 router.delete('/deleteUser/:userid', cors(corsOptionsDelegate),profileController.DeleteUserById);

module.exports = router;