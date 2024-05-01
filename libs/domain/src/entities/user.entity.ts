export class User {
  constructor(
    private readonly id: number,
    private name: string,
    private email: string,
    private encodedPassword: string,
  ) {}

  getId(): number {
    return this.id;
  }

  getEmail(): string {
    return this.email;
  }

  getEncodedPassword(): string {
    return this.encodedPassword;
  }
}
