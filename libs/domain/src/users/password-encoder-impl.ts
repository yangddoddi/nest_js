import { PasswordEncoder } from '@app/domain/users/password-encoder';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordEncoderImpl implements PasswordEncoder {
  encode(password: string): string {
    return password + 'aaaa';
  }
}
