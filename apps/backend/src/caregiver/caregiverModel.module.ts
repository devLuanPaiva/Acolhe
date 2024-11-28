import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/db/prisma.module';
import { CaregiverController } from './caregiverController.controller';
import { CaregiverProvider } from './caregiverProvider.provider';

@Module({
  imports: [PrismaModule],
  controllers: [CaregiverController],
  providers: [CaregiverProvider],
})
export class CaregiverModule {}
