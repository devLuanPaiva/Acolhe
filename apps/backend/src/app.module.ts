import { Module } from '@nestjs/common';
import { PrismaModule } from './db/prisma.module';
import { UserModule } from './user/userModel.module';
import { PatientModule } from './patient/patientModule.module';
import { CaregiverModule } from './caregiver/caregiverModel.module';
import { RequestModule } from './request/requestModule.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    PatientModule,
    CaregiverModule,
    RequestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
