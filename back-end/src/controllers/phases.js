const Phase = require('../models/Phase');
const Task = require('../models/Task');

const PhasesController = { //criação de uma linha de fase.
    async createPhase(req, res) {
        const newPhase ={
            title: req.body.title,
            task_id: req.body.task_id,
            on_off: 0
        }

        const phaseId= await Phase.create(newPhase);
       //const phase = await Phase.findOne({where: {id: phaseId.id},include:[{where:{taskId: }}]})

        console.log('etapa criada=================');

        return res.status(201).json(phaseId);
    },
    async deletePhase(req, res) { //deletando a linha de fase
        await Phase.destroy(res.body.title);


        return res.send();
    },

    async listPhase(req,res){ //listando a fase
        const {title, on_off} =  await Phase.findById(res.body.taskId)//essa parte ta errada


        return res.status(201).json({title, on_off });
    },

    async alterPhase(req,res){ //alterando a phase
        const alterPhase = {title: ''};


        const title = await Phase.update({where: {id: res.body.id}});
        return res.status(201).json(title);
    },

    async completPhase(req,res){ //completando a fase
        const completPhase = {on_off:  1}

        //isso não vai completar todas as phases?
        const on_off = await Phase.update(completPhase);

        return res.status(201).json({on_off});
    }
};
module.exports  = PhasesController;
