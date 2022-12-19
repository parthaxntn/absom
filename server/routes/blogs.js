const express = require('express');
const router = express.Router()
const fetchuser = require('../middleware/fetchuser')


// '/api/blog/read' will fetch the blogs
router.get('/read',fetchuser,(req,res)=>{
    res.json({msg:'hello'})
})

module.exports = router;