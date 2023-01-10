import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { Req } from '@nestjs/common/decorators';
import { userDTO } from 'src/models/user/dto/user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local_auth.guard';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Req() req) {
    return await this,this.authService,this.signIn(req.user)
  }

  @Post('signup')
  async signUp(@Body() userDTO: userDTO) {
    return await this.authService.signUp(userDTO);
  }

}
