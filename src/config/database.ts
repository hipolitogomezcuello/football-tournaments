import * as pg from 'pg';
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize(process.env.DB_URL || '', {
  dialect: 'postgres',
  dialectModule: pg,
});

export default sequelize;