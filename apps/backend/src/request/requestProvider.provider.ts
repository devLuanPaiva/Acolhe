import { IRequest } from '@acolhe/core';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class RequestProvider {
  constructor(private readonly repo: PrismaService) {}
  async getRequestByUserId(userId: number): Promise<IRequest[]> {
    const requests = await this.repo.request.findMany({
      where: {
        caregiverId: userId,
      },
    });
    return requests as any;
  }
  async updateStatusRequest(
    requestId: number,
    status: Partial<IRequest>,
  ): Promise<void> {
    await this.repo.request.update({
      where: { id: requestId },
      data: {
        status: status.status,
      },
    });
  }
  async deleteRequest(requestId: number): Promise<void> {
    await this.repo.request.delete({ where: { id: requestId } });
  }
  async create(request: IRequest): Promise<void> {
    await this.repo.request.create({
      data: {
        value: request.value,
        status: request.status,
        patient: {
          connect: { id: request.patient?.id }, // Conectar ao paciente pelo ID
        },
        caregiver: {
          connect: { id: request.caregiver?.id }, // Conectar ao cuidador pelo ID
        },
      },
    });
  }
}
