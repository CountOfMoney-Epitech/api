import { Sequelize } from 'sequelize';

const dbUser = process.env.DATABASE_USER;
const dbPass = process.env.DATABASE_PASSWORD;
const dbHost = process.env.DATABASE_HOST;
const dbPort = process.env.DATABASE_PORT;
const db = process.env.DATABASE_DB;

export const seq = new Sequelize(
  `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${db}`,
);
