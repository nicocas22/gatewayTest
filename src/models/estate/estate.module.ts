import { Module } from '@nestjs/common';
import { EstateController } from './estate.controller';
import { ConfigModule } from '@nestjs/config';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ ConfigModule.forRoot(), ProxyModule],
  controllers: [EstateController],
})
export class EstateModule {}
