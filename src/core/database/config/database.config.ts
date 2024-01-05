import * as dotenv from 'dotenv';
import { DBConfigInterface } from '../interfaces/dbconfig.interface';

dotenv.config();

export const databaseConfig: DBConfigInterface = {
  development: {
    username: process.env.DATABASE_USER_DEV,
    password: process.env.DATABASE_PASSWORD_DEV,
    database: process.env.DATABASE_NAME_DEV,
    host: process.env.DATABASE_HOST_DEV,
    port: process.env.DATABASE_PORT_DEV,
    dialect: process.env.DATABASE_DIALECT_DEV,
  },
  test: {
    username: process.env.DATABASE_USER_CI,
    password: process.env.DATABASE_PASSWORD_CI,
    database: process.env.DATABASE_NAME_CI,
    host: process.env.DATABASE_HOST_CI,
    port: process.env.DATABASE_PORT_CI,
    dialect: process.env.DATABASE_DIALECT_CI,
  },
  production: {
    username: process.env.DATABASE_USER_PROD,
    password: process.env.DATABASE_PASSWORD_PROD,
    database: process.env.DATABASE_NAME_PROD,
    host: process.env.DATABASE_HOST_PROD,
    port: process.env.DATABASE_PORT_PROD,
    dialect: process.env.DATABASE_DIALECT_PROD,
  },
};
