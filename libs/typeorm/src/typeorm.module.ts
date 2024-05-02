import { Module } from '@nestjs/common';
import { typeOrmConfig } from '@app/typeorm/config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormUserRepository } from '@app/typeorm/users/typeorm-user.repository';
import { TypeormUser } from '@app/typeorm/users/typeorm-user.entity';

@Module({
  exports: ['UserRepository'],
  providers: [
    {
      provide: 'UserRepository',
      useClass: TypeormUserRepository,
    },
  ],
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([TypeormUser]),
  ],
})
export class TypeormModule {}
