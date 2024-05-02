import { Module } from '@nestjs/common';
import { DomainService } from './domain.service';
import { SignupManager } from '@app/domain/users/signup-manager';
import { PasswordEncoderImpl } from '@app/domain/users/password-encoder-impl';
import { TypeormModule } from '@app/typeorm';

@Module({
  imports: [TypeormModule],
  providers: [
    DomainService,
    SignupManager,
    {
      provide: 'PasswordEncoder',
      useClass: PasswordEncoderImpl,
    },
  ],
  exports: [DomainService, SignupManager],
})
export class DomainModule {}
