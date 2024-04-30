import { UserEntity } from '@app/domain/entities/user.entity';

export interface UserRepository {
  findById(id: string): Promise<UserEntity | null>;
  create(user: UserCreateRequest): Promise<UserEntity>;
  findByEmail(email: string): Promise<UserEntity | null>;
}
