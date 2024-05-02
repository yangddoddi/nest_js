import { Body, Controller, Inject, Injectable, Post } from '@nestjs/common';
import { SignupManager } from '@app/domain/users/signup-manager';
import { UserSignupApiRequest } from './dto/user-signup-api.request';
import { ResponseEntity } from '../common/dto/response-entity';
import { UserSignupApiResponse } from './dto/user-signup-api.response';

@Injectable()
@Controller()
export class UserController {
  constructor(
    @Inject(SignupManager)
    private readonly signupManager: SignupManager,
  ) {}

  @Post('/signup')
  async create(
    @Body() request: UserSignupApiRequest,
  ): Promise<ResponseEntity<UserSignupApiResponse>> {
    const user = await this.signupManager.signup(request.toDomain());

    const responseDto = new UserSignupApiResponse(user.getId());

    const entity = new ResponseEntity<UserSignupApiResponse>(
      responseDto,
      'success',
      200,
    );

    return Promise.resolve(entity);
  }
}
