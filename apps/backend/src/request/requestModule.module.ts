import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/db/prisma.module';
import { RequestController } from './requestController.controller';
import { RequestProvider } from './requestProvider.provider';

@Module({
  imports: [PrismaModule],
  controllers: [RequestController],
  providers: [RequestProvider],
})
export class RequestModule {}
