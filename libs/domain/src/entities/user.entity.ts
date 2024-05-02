export class User {
  constructor(
    private readonly id: number,
    private name: string,
    private email: string,
    private encodedPassword: string,
    private readonly createdAt: Date,
    private readonly lastModifiedAt: Date,
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

  getName(): string {
    return this.name;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getLastModifiedAt(): Date {
    return this.lastModifiedAt;
  }
}
