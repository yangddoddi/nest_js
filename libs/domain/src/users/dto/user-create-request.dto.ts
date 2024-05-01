export class UserCreateRequest {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly encodedPassword: string,
  ) {
    if (!name) {
      throw new Error('Name is required');
    }
    if (!email) {
      throw new Error('Email is required');
    }
    if (!encodedPassword) {
      throw new Error('Password is required');
    }
  }

  static fromSignupRequest(
    request: SignupRequest,
    encodedPassword: string,
  ): UserCreateRequest {
    return new UserCreateRequest(request.name, request.email, encodedPassword);
  }
}
