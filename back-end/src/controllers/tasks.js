const Task = require('../models/Task');
const TasksController = {
    async listTask(req, res) {
        const {title, image, initData, endData } = await Task.findAll();

        return res.status(201).json({title, image, initData, endData });
    },

    async detalheTask(req, res) {//faltou colocar o userId
        const detalheTask={
            title: req.body.title,
            image: req.body.image,
            initData: req.body.initData,
            endData: req.body.endData
          }
        const {title, image, initData, endData } = await Task.findById(req.body.id);

        return res.status(201).json({title, image, initData, endData });
    },

  async createTask(req, res) {
    const newTask={
      title: req.body.title,
      image: req.body.image,
      initData: req.body.initData,
      endData: req.body.endData
    }
    const { id, title, image, initData, endData } = await Task.create(newTask);

    return res.status(201).json({ id, title, image, initData, endData });
  },

  async updateTask(req, res) {
    const updateTask={
      title:'' ,
      image:'' ,
      initData:'' ,
      endData:''
    }
    const { title, image, initData, endData } = await Task.update(updateTask,{new: true});

    return res.status(201).json({ title, image, initData, endData });
  },

  async deleteTask(req, res) {
    await Task.destroy(res.body.id);

    return res.send();
  },
};
module.exports = TasksController;
