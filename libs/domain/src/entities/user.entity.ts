export class User {
  constructor(
    private readonly id: number,
    private name: string,
    private email: string,
    private encodedPassword: string,
  ) 
}
