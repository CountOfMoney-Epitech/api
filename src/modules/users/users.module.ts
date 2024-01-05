import { Module } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { userProvider } from './provider/users.provider';

@Module({
  providers: [UsersService, ...userProvider],
  exports: [UsersService],
})
export class UsersModule {}
