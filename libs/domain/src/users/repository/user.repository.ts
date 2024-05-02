import { User } from '@app/domain/entities/user.entity';
import { UserCreateRequest } from '@app/domain/users/dto/user-create-request.dto';

export interface UserRepository {
  findById(id: number): Promise<User | null>;
  saveUser(user: UserCreateRequest): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
