const { User } = require("../models");

//get all users
exports.getAllUsers = async (req, res) => {
    
        const users = await User.findAll();
        res.json(users);
    }

//post new user
exports.createUser = async (req, res) => {
  
        const {nome,email,senha}=req.body;
        const user = await User.create({nome,email,senha});
        res.json(user);
 }

exports.delete = async (req, res) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    if(!user){
        return res.status(404).json({message: "Usuario nao encontrado"});
    }
 await user.destroy();
 res.json({message: "Usuario deletado com sucesso"});
}
  