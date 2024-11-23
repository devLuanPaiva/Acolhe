import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/db/prisma.module';
import { PatientProvider } from './patientProvider.provider';
import { PatientController } from './patientController.controller';

@Module({
  controllers: [PatientController],
  providers: [PatientProvider],
  imports: [PrismaModule],
})
export class PatientModule {}
