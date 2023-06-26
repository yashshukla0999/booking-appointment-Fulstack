const express= require('express');
const router = express.Router();

const userdata = require('../controller/controls')

router.get('/', userdata.showForm)
router.post('/done',userdata.postUser)
router.get('/done',userdata.showUser)
router.delete('/done/:id', userdata.deleteUser)
router.put('/done/:id', userdata.editUser)

  module.exports=router;
