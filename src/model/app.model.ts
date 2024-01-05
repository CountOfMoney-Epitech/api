import { seq } from '../../config/db.config';

import { CryptoCurrency } from './crypto/crypto.model';
import { Currency } from './currency/currency.model';
import { Role } from './role/role.model';
import { User } from './user/user.model';

export const init = async () => {
  await associate();
  await seq.sync();
};

const associate = async () => {
  // Associate users to currencies
  User.belongsTo(Currency);
  Currency.hasMany(User, {
    foreignKey: 'user_default_currency_id',
  });

  // Associate users to roles
  User.belongsTo(Role);
  Role.hasMany(User, {
    foreignKey: 'user_role_id',
  });

  // Associate users to cryptos
  User.belongsToMany(CryptoCurrency, { through: 'users_cryptos' });
  CryptoCurrency.belongsToMany(User, { through: 'users_cryptos' });
};
