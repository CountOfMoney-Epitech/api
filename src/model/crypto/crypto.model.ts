import { DataTypes } from 'sequelize';
import { seq } from '../../../config/db.config';

export const CryptoCurrency = seq.define('cryptos', {
  crypto_name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  crypto_ticker: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
