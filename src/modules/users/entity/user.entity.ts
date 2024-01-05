import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  user_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      is: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    },
  })
  user_login: string;

  @Column({
    type: DataType.STRING(72),
    allowNull: false,
  })
  user_pass: string;
}
