import { TypeormUser } from '@app/typeorm/users/typeorm-user.entity';
import { UserCreateRequest } from '@app/domain/users/dto/user-create-request.dto';
import { Repository } from 'typeorm';
import { UserRepository } from '@app/domain/users/repository/user.repository';
import { User } from '@app/domain/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TypeormUserRepository implements UserRepository {
  constructor(
    @InjectRepository(TypeormUser)
    private readonly repository: Repository<TypeormUser>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.repository.findOne({
      where: {
        email: email,
      },
    });

    return user === null ? null : Promise.resolve(user.toDomain());
  }

  async saveUser(request: UserCreateRequest): Promise<User> {
    const user = TypeormUser.create(
      request.name,
      request.email,
      request.encodedPassword,
    );

    const savedUser = await this.repository.save(user);

    return Promise.resolve(savedUser.toDomain());
  }

  async findById(id: number): Promise<User | null> {
    const user = await this.repository.findOne({
      where: {
        id: id,
      },
    });

    return Promise.resolve(user.toDomain());
  }
}
