import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserMSG } from 'src/common/constants';
import { ClientProxyUsers } from 'src/common/proxy/clientProxy';
import { userDTO } from 'src/models/user/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly clientProxy: ClientProxyUsers,
    private readonly jwtService: JwtService
  ){}

  private _clientProxyUser = this.clientProxy.clientProxyUsuario();
  async validateUser(email:string,password:string): Promise<any> {
    const user = await this._clientProxyUser.send(UserMSG.VALID_USER, {email,password} );
    
    if(user) return user;

    return null;
  }

  async signIn(user: any) {
    const payload = {
      email: user.email,
      sub: user._id,
    };

    return {access_token: this.jwtService.sign(payload)}
  }

  async signUp(userDTO: userDTO) {
    return await this._clientProxyUser.send(UserMSG.CREATE, userDTO)
  }
}
