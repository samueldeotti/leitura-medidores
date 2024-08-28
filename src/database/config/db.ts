import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './dev.db',
  logging: console.log,
});

export default sequelize;