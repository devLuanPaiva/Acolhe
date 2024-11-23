import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/db/prisma.module';
import { UserController } from './userController.controller';
import { UserProvider } from './userProvider.provider';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserProvider],
})
export class UserModule {}
