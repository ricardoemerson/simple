import Sequelize, { QueryTypes } from 'sequelize';
import databaseConfig from '../../config/database';

const sequelize = new Sequelize(databaseConfig);

class HelloController {
  async index(req, res) {
    const data = await sequelize.query(
      'SELECT id, name, email, provider FROM users ORDER BY name',
      {
        type: QueryTypes.SELECT,
      },
    );

    return res.json(data);
  }

  async show(req, res) {
    const { id } = req.params;

    const data = await sequelize.query(
      'SELECT id, name, email, provider FROM users WHERE id = :id',
      {
        replacements: { id },
        type: QueryTypes.SELECT,
      },
    );

    return res.json(data[0]);
  }

  async complex(req, res) {
    const data = await sequelize.query(
      'select a.date, u.name from appointments a, users u where a.user_id = u.id',
      {
        type: QueryTypes.SELECT,
      },
    );

    return res.json(data);
  }
}

export default new HelloController();
