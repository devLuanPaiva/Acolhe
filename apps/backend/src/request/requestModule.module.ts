import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/db/prisma.module';
import { RequestController } from './requestController.controller';
import { RequestProvider } from './requestProvider.provider';
import { Caregiver } from '@acolhe/core';

@Module({
  imports: [PrismaModule],
  controllers: [RequestController],
  providers: [RequestProvider, Caregiver],
})
export class RequestModule {}
