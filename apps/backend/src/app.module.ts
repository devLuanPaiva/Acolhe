import { Module } from '@nestjs/common';
import { PrismaModule } from './db/prisma.module';
import { UserModule } from './user/userModel.module';
import { PatientModule } from './patient/patientModule.module';

@Module({
  imports: [PrismaModule, UserModule, PatientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
