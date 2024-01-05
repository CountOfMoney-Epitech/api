import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants';
import { User } from '../entity/user.entity';
import { UserDTO } from '../dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(user: UserDTO): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findOneByLogin(user_login: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { user_login } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
}
