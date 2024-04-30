interface PasswordEncoder {
  encode(password: string): Promise<string>;
}
