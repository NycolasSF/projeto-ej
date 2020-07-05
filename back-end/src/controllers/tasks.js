const Task = require('../models/Task');
const TasksController = {
    async listTask(req, res) {
        const tasks = await Task.findAll();

        return res.status(201).json(tasks);
    },

    async detalheTask(req, res) {//faltou colocar o userId
      const {params}=req;
      console.log(params)
      const {title, image, init_data, end_data } = await Task.findByPk(params.id);

        return res.status(201).json({title, image, init_data, end_data });
    },

  async createTask(req, res) {
    const newTask={
      title: req.body.title,
      image: req.body.image,
      init_data: req.body.init_data,
      end_data: req.body.end_data,
      user_id: req.body.user_id,
      type_id: req.body.type
    }
    const { id, title, image, init_data, end_data, user_id, type_id} = await Task.create(newTask);

    return res.status(201).json({ id, title, image, init_data, end_data, user_id, type_id });
  },

  async updateTask(req, res) {
    const {params}=req;
    const task = await Task.findByPk(params.id);
    const updateTask={
      title:'' ,
      image:'' ,
      init_data:'' ,
      end_data:''
    }
    const { title, image, init_data, end_data } = await Task.update(updateTask,{new: true});

    return res.status(201).json({ title, image, init_data, end_data });
  },

  async deleteTask(req, res) {
    await Task.destroy(res.body.id);

    return res.send();
  },
};
module.exports = TasksController;
