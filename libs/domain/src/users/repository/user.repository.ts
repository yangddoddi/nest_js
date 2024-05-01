import { User } from "@app/domain/entities/user.entity";


export interface UserRepository {
  findById(id: number): Promise<User | null>;
  create(user: UserCreateRequest): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
