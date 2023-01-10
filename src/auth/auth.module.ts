import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/models/user/user.module';
import { PassportModule} from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocalStrategy } from './strategies/local.strategy';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { JwtStrategy } from './strategies/jwt.strategy';
@Module({
  imports: [
    ConfigModule.forRoot(),
    ProxyModule,
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get(process.env.JWT_SECRET),
        signOptions: {
          expiresIn: config.get(process.env.EXPIRES_IN),
          audience: config.get(process.env.APP_URL)
        }
      })
    })

  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
