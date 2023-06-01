const express = require("express");
const router = express.Router();


router.get('/',(req,res,next) => {
 res.status(200).json({
 message:"handleing get request profile data"
 });
});

router.post('/',(req,res,next) => {
res.status(200).json({
message:"handleing post request profile data"
});
});


module.exports = router;