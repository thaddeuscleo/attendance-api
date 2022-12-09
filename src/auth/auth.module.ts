import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [PrismaModule, JwtModule.register({
    secret: 'secret',
    signOptions: {
      expiresIn: '1000s'
    }
  })],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
