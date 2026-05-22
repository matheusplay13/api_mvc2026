const express = require("express"); //CommonJS
const userController = require("../controllers/usercontrollers"); //CommonJS
const router = express.Router(); //Cria um router

router.get('/users', userController.getAllUsers); //GET /users
router.post('/users', userController.createUser); //POST /users
router.delete('/users/:id', userController.delete); //DELETE /users

module.exports = router;