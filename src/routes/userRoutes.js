const express = require("express"); //CommonJS
const userController = require("../controllers/usercontrollers"); //CommonJS
const router = express.Router(); //Cria um router

router.get('/users', userController.findAll); //GET /users
router.post('/users', userController.create); //POST /users
router.delete('/users', userController.delete); //DELETE /users

module.exports = router;