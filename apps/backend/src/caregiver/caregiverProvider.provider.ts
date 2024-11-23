import { Injectable } from '@nestjs/common';
import { ICaregiver, ICaregiverRepository } from '@acolhe/core';
import { PrismaService } from 'src/db/prisma.service';
import { UserProvider } from 'src/user/userProvider.provider';

@Injectable()
export class CaregiverProvider
  extends UserProvider
  implements ICaregiverRepository
{
  constructor(readonly prisma: PrismaService) {
    super(prisma);
  }

  async listCaregiver(): Promise<ICaregiver[]> {
    const caregivers = await this.prisma.caregiver.findMany();
    return caregivers as any;
  }

  async addDiary(value: number, userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { userId },
    });
    await this.prisma.caregiver.create({
      data: {
        diaryValue: value,
        id: user.id,
      },
    });
  }

  async getCaregiverByDiary(valueMin: number, valueMax: number) {
    const caregiversList = await this.prisma.caregiver.findMany({
      where: {
        dailyValue: {
          gte: valueMin,
          lte: valueMax,
        },
      },
    });
    return caregiversList;
  }

  async evaluateCaregiver(value: string) {
    await await this.prisma.caregiver.create({
      data: value,
    });
  }
}
