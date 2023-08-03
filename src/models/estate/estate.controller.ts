/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import {Observable} from 'rxjs';
import { estateDTO } from './dto/estate.dto';
import { ClientProxyUsers } from 'src/common/proxy/clientProxy';
import { IEstate } from 'src/common/interfaces/estate.interface';
import { EstateMSG } from 'src/common/constants';

@Controller('api/v1/estate')
export class EstateController {
  constructor(private readonly clientProxy: ClientProxyUsers) {}
  private _ClienteProxyEstate = this.clientProxy.clientProxyEstate();
  async onApplicationBootstrap() {await this._ClienteProxyEstate.connect()} 
  @Post()
  create(@Body() estateDTO:estateDTO):Observable<IEstate>{
    return this._ClienteProxyEstate.send(EstateMSG.CREATE, estateDTO); 
  } 
  
  @Get()
  findAll():Observable<IEstate[]>{
    return  this._ClienteProxyEstate.send(EstateMSG.FIND_ALL, '');  
  }

  @Get(':id')
  findOne(@Param('id')id: string): Observable<IEstate> {
    return this._ClienteProxyEstate.send(EstateMSG.FIND_ONE, id)
  }

  @Put(':id')
  update(@Param('id') id: string): Observable<IEstate>{
    return this._ClienteProxyEstate.send(EstateMSG.UPDATE, id);
  }

  @Delete(':id')
  delete(@Param("id") id: string) : Observable<IEstate> {
    return this._ClienteProxyEstate.send(EstateMSG.DELETE, id);
  }
 }
