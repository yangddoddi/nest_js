import { SignupRequest } from '@app/domain/users/dto/signup-request.dto';
import { IsString, MinLength } from 'class-validator';

export class UserSignupApiRequest {
  @IsString()
  public readonly name: string;

  @IsString()
  public readonly email: string;

  @IsString()
  @MinLength(8)
  public readonly password: string;

  public toDomain(): SignupRequest {
    return new SignupRequest(this.name, this.email, this.password);
  }
}
