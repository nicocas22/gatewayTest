import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ ConfigModule.forRoot(), ProxyModule],
  controllers: [UserController],
})
export class UserModule {}
