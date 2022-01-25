import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  id: number = 0;
  users = [];
}
