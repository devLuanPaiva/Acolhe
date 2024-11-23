import { Module } from '@nestjs/common';
import { PrismaModule } from './db/prisma.module';
import { UserModule } from './user/userModel.module';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
