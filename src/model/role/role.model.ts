import { DataTypes } from 'sequelize';
import { seq } from '../../../config/db.config';

export const Role = seq.define('roles', {
  role_name: {
    type: DataTypes.ENUM('USER', 'ADMIN'),
    unique: true,
    allowNull: false,
  },
});
