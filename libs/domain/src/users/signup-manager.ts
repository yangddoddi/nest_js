import { UserRepository } from '@app/domain/users/repository/user.repository';
import { User } from '@app/domain/entities/user.entity';

export class SignupManager {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordEncoder: PasswordEncoder,
  ) {}

  async signup(request: SignupRequest): Promise<User> {
    const existUser = await this.userRepository.findByEmail(request.email);

    if (existUser != null) {
      throw new Error('User already exists');
    }

    const encodedPassword = await this.passwordEncoder.encode(request.password);

    const userCreateRequest = UserCreateRequest.fromSignupRequest(
      request,
      encodedPassword,
    );

    return await this.userRepository.create(userCreateRequest);
  }
}
