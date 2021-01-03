const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {
  const { macaddress, type, title, description, when } = req.body;
  if (!macaddress) {
    return res.status(400).json({ error: 'macaddress é obrigatório' });
  }
  else if (!type) {
    return res.status(400).json({ error: 'tipo é obrigatório' });
  }
  else if (!title) {
    return res.status(400).json({ error: 'título é obrigatório' });
  }
  else if (!description) {
    return res.status(400).json({ error: 'descrição é obrigatória' });
  }
  else if (!when) {
    return res.status(400).json({ error: 'data e hora são obrigatórias' });
  }
  else if (isPast(new Date(when))) {
    return res.status(400).json({ error: 'escolha uma data e hora futura' });
  }
  else {
    let exists;

    exists = await TaskModel.findOne(
      {
        'when': { '$eq': new Date(when) },
        'macaddress': { '$in': macaddress }
      }
    );
    if (exists) {
      return res.status(400).json({ error: 'Já existe uma tarefa nesse dia e horário' });
    }
    next();
  }
}

module.exports = TaskValidation;