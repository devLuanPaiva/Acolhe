import { IPatientRepository } from '@acolhe/core';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { UserProvider } from 'src/user/userProvider.provider';

@Injectable()
export class PatientProvider
  extends UserProvider
  implements IPatientRepository
{
  constructor(readonly prisma: PrismaService) {
    super(prisma);
  }
  async addMedicalCondition(condition: string, idUser: number): Promise<void> {
    await this.prisma.patient.create({
      data: {
        medicalCondition: condition,
        user: {
          connect: {
            id: idUser,
          },
        },
      },
    });
  }
}
