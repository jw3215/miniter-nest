import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepository } from './users.database-repository';

describe('UserDatabaseRespository', () => {
  let provider: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersRepository],
    }).compile();

    provider = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
