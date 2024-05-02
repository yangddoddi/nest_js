import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '@app/typeorm/common/base-time.entity';
import { User } from '@app/domain/entities/user.entity';

@Entity({
  name: 'users',
})
export class TypeormUser extends BaseTimeEntity {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  public id: number;

  @Column({ name: 'name' })
  public name: string;

  @Column({ name: 'email' })
  public email: string;

  @Column({ name: 'encoded_password' })
  public encodedPassword: string;

  public static create(
    name: string,
    email: string,
    encodedPassword: string,
  ): TypeormUser {
    const user = new TypeormUser();
    user.name = name;
    user.email = email;
    user.encodedPassword = encodedPassword;
    return user;
  }

  public toDomain(): User {
    return new User(
      this.id,
      this.name,
      this.email,
      this.encodedPassword,
      this.createdAt,
      this.updatedAt,
    );
  }
}
