import { UserRepository } from '@app/domain/users/repository/user.repository';
import { User } from '@app/domain/entities/user.entity';
import { UserCreateRequest } from '@app/domain/users/dto/user-create-request.dto';
import { SignupRequest } from '@app/domain/users/dto/signup-request.dto';
import { PasswordEncoder } from '@app/domain/users/password-encoder';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class SignupManager {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
    @Inject('PasswordEncoder')
    private readonly passwordEncoder: PasswordEncoder,
  ) {}

  async signup(request: SignupRequest): Promise<User> {
    const existUser = await this.userRepository.findByEmail(request.email);

    if (existUser != null) {
      throw new Error('User already exists');
    }

    const encodedPassword = this.passwordEncoder.encode(request.password);

    const userCreateRequest = UserCreateRequest.fromSignupRequest(
      request,
      encodedPassword,
    );

    return await this.userRepository.saveUser(userCreateRequest);
  }
}
