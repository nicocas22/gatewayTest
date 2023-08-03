/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './models/user/user.module';
import { EstateModule } from './models/estate/estate.module';



@Module({
  imports: [ConfigModule.forRoot(),
    UserModule,
    EstateModule,
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
