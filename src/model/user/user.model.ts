import { DataTypes } from 'sequelize';

import { seq } from '../../../config/db.config';

export const User = seq.define('users', {
  user_name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      is: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
  },
  user_password: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  user_role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
