import * as pg from 'pg';
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize('postgresql://postgres:wgR2TluzOvKZ5nkc@db.gjwarctwxvbumhmodagm.supabase.co:5432/postgres', {
  dialect: 'postgres',
  dialectModule: pg,
});

export default sequelize;