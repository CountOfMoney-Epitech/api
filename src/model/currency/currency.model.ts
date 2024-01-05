import { DataTypes } from 'sequelize';
import { seq } from '../../../config/db.config';

export const Currency = seq.define('currencies', {
  currency_name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  currency_ticker: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
