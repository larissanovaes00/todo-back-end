const TaskModel = require('../model/TaskModel');

// feito em modelo de classe para poder utilizar os métodos de maneira componentizada,
// posso utilizar os métodos criados separadamente dessa forma

class TaskController {

  async create(req, res) {
    // pega o body da task criada e configura de acordo com meu TaskModel
    const task = new TaskModel(req.body);
    // espera minha task ser salva e verifica se deu tudo certo
    await task.save()
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    });
  }

  async update(req, res) {
    await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(error => {
      return res.status(500).json(error);
    });
  }


}

module.exports = new TaskController();