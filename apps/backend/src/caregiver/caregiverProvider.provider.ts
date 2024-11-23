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

  // Lista todos os cuidadores no banco de dados
  async listCaregiver(): Promise<ICaregiver[]> {
    const caregivers = await this.prisma.caregiver.findMany({
      include: {
        user: true, // Inclui os dados do usuário associados
      },
    });
    return caregivers as any;
  }

  // Adiciona um valor diário para um cuidador específico
  async addDiary(value: number, userId: number): Promise<void> {
    // Verifica se o cuidador existe
    const caregiver = await this.prisma.caregiver.findUnique({
      where: { id: userId },
    });

    if (!caregiver) {
      throw new Error('Caregiver not found');
    }

    // Atualiza o valor diário do cuidador
    await this.prisma.caregiver.update({
      where: { id: userId },
      data: { dailyValue: value },
    });
  }

  // Retorna cuidadores com valor diário dentro de um intervalo
  async getCaregiverByDiary(
    valueMin: number,
    valueMax: number,
  ): Promise<ICaregiver[]> {
    const caregivers = await this.prisma.caregiver.findMany({
      where: {
        dailyValue: {
          gte: valueMin,
          lte: valueMax,
        },
      },
      include: {
        user: true, // Inclui os dados do usuário associados
      },
    });
    return caregivers as any;
  }

  // Adiciona uma avaliação ao cuidador
  async evaluateCaregiver(value: string, userId: number): Promise<void> {
    // Verifica se o cuidador existe
    const caregiver = await this.prisma.caregiver.findUnique({
      where: { id: userId },
    });

    if (!caregiver) {
      throw new Error('Caregiver not found');
    }

    // Adiciona a avaliação ao array de avaliações do cuidador
    await this.prisma.caregiver.update({
      where: { id: userId },
      data: {
        avaliations: {
          push: value, // Adiciona ao array existente
        },
      },
    });
  }
}
