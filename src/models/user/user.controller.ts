/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import {Observable} from 'rxjs';
import { userDTO } from './dto/user.dto';
import { ClientProxyUsers } from 'src/common/proxy/clientProxy';
import { IUser } from 'src/common/interfaces/user.interface';
import { UserMSG } from 'src/common/constants';

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly clientProxy: ClientProxyUsers) {}
  private _ClienteProxyUser = this.clientProxy.clientProxyUsuario();
  async onApplicationBootstrap() {await this._ClienteProxyUser.connect()} 
  @Post()
  create(@Body() userDTO:userDTO):Observable<IUser>{
    return this._ClienteProxyUser.send(UserMSG.CREATE, userDTO); 
  } 
  
  @Get()
  findAll():Observable<IUser[]>{
    return  this._ClienteProxyUser.send(UserMSG.FIND_ALL, '');  
  }

  @Get(':id')
  findOne(@Param('id')id: string): Observable<IUser> {
    return this._ClienteProxyUser.send(UserMSG.FIND_ONE, id)
  }

  @Put(':id')
  update(@Param('id') id: string): Observable<IUser>{
    return this._ClienteProxyUser.send(UserMSG.UPDATE, id);
  }

  
}
