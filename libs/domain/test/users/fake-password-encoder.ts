export class FakePasswordEncoder implements PasswordEncoder {
  public postfix = 'fake';

  encode(password: string): string {
    return password + this.postfix;
  }
}
