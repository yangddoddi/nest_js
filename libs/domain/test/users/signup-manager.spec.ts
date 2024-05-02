import { SignupManager } from '@app/domain/users/signup-manager';
import { UserRepository } from '@app/domain/users/repository/user.repository';
import { FakeUserRepository } from './fake-user.repository';
import { FakePasswordEncoder } from './fake-password-encoder';
import { PasswordEncoder } from '@app/domain/users/password-encoder';

describe('SignupManager', () => {
  let signupManager: SignupManager;
  let userRepository: UserRepository;
  let passwordEncoder: PasswordEncoder;

  beforeEach(() => {
    userRepository = new FakeUserRepository();
    passwordEncoder = new FakePasswordEncoder();
    signupManager = new SignupManager(userRepository, passwordEncoder);
  });

  it('should be defined', () => {
    expect(signupManager).toBeDefined();
  });

  it('이미 같은 이메일을 가진 유저가 존재하면 에러를 던진다', async () => {
    // given
    const email = '테스트이메일';

    await userRepository.saveUser({
      email: email,
      name: '테스트이름',
      encodedPassword: '테스트패스워드',
    });

    const signupRequest = {
      email: email,
      name: '테스트이름',
      password: '테스트패스워드',
    };

    // when then
    await expect(signupManager.signup(signupRequest)).rejects.toThrow(
      'User already exists',
    );
  });

  it('같은 이메일을 가진 유저가 없다면 유저를 생성한다', async () => {
    // given
    const signupRequest = {
      email: '테스트이메일',
      name: '테스트이름',
      password: '테스트패스워드',
    };

    // when
    const user = await signupManager.signup(signupRequest);

    // then
    expect(user).toBeDefined();
    expect(user.getId()).toBeDefined();
    expect(user.getEmail()).toBe(signupRequest.email);
    expect(user.getEncodedPassword()).toBe(
      passwordEncoder.encode(signupRequest.password),
    );
  });
});
