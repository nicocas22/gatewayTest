/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import {ClientProxyUsers} from'./clientProxy'
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
    imports: [ ConfigModule.forRoot()],
    providers: [ ClientProxyUsers],
    exports: [ClientProxyUsers]
})
export class ProxyModule {}