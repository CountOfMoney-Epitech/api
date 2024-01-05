import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/service/users.service';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async validateUser(userLogin: string, password: string) {
    const user = await this.userService.findOneByLogin(userLogin);

    if (!user) {
      return null;
    }

    const match = await this.comparePassword(password, user.user_pass);

    if (!match) {
      return null;
    }

    const result = user['dataValues'];
    return result;
  }

  public async login(user) {
    const token = await this.generateToken(user);

    return { user, token };
  }

  public async create(user) {
    const pass = await this.hashPass(user.user_pass);

    const newUser = await this.userService.create({
      ...user,
      user_password: pass,
    });

    const result = newUser['dataValues'];

    const token = await this.generateToken(result);

    return { user: result, token };
  }

  private async generateToken(user) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  private async hashPass(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  private async comparePassword(inputPassword: string, storedPassword: string) {
    const match = await bcrypt.compare(inputPassword, storedPassword);
    return match;
  }
}
