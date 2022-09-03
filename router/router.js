const express = require("express");
const multer= require('multer');

const upload= multer();

// internal export's
const{decodedHtmlresponse}= require('../middleware/common/decodeHtml');
const{getUser}= require('../controller/getUserController');
// const updateUser= require('../controller/updateUserController');
const {createUser}=require('../controller/createUserController');
const addUser= require('../controller/addUserconttroller');
const {addUserValidator,addUserValidatorHandler}= require('../middleware/addUserValidator');
const {update,updateAuser, deleteUser}=require('../controller/updateConttroller');

//
const router = express.Router();
router.get('/',decodedHtmlresponse('Index_page'),getUser);
router.get('/addUser',decodedHtmlresponse('Add_user_page'),addUser);
// router.get('/updateUser',decodedHtmlresponse('Update_user_page'),updateUser);
router.post('/',upload.none(),addUserValidator,addUserValidatorHandler,createUser)
router.get('/update/:id',decodedHtmlresponse('update_page'),update);
router.put('/update_a/:id',upload.none(),updateAuser);
router.delete('/remove/:id',deleteUser);

module.exports = router;
