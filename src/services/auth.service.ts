import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register(): string {
    return 'Hello World!';
  }
}
