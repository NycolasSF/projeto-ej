const User = require('../models/User');
const {hash} =require('bcryptjs')
const UsuariosController = {
  async createUsuario(req, res) {
    const usuario = await User.findOne({ where: { email: req.body.email } });

    if (usuario)
      return res.status(400).json({ error: 'Email já está cadastrado' });
    const hashedPassword = await hash(req.body.password, 8)
    const newUser={
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      avatar: req.body.avatar,
      on_off: 1
    }
    const { id, name, email, avatar } = await User.create(newUser);

    return res.status(201).json({ id, name, email, avatar });
  },
};
module.exports = UsuariosController;
