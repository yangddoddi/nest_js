import { UserRepository } from '@app/domain/users/repository/user.repository';
import { User } from '@app/domain/entities/user.entity';
import { UserCreateRequest } from '@app/domain/users/dto/user-create-request.dto';

export class FakeUserRepository implements UserRepository {
  private users: User[] = [];
  private id = 1;

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.getEmail() === email) ?? null;
  }

  async create(request: UserCreateRequest): Promise<User> {
    const user = new User(
      this.id++,
      request.name,
      request.email,
      request.encodedPassword,
    );

    this.users.push(user);

    return Promise.resolve(user);
  }

  async findById(id: number): Promise<User | null> {
    return this.users.find((user) => user.getId() === id) ?? null;
  }
}
