import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [AuthService],
  imports: [UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService): JwtModuleOptions => ({
        secret: configService.get<string>('JWT_SECRET') || 'your_secret_key',
        signOptions: {
          expiresIn: configService.get('JWT_EXPIRES_IN') || '60s',
        },
      }),
      inject: [ConfigService],
    }),
  ]

})
export class AuthModule {}
