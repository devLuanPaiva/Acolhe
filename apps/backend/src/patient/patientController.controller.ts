import { Body, Controller, Param, Post } from '@nestjs/common';
import { PatientProvider } from './patientProvider.provider';
import { Patient } from '@acolhe/core';

@Controller('api/patient')
export class PatientController {
  constructor(private readonly repo: PatientProvider) {}

  @Post('medical-condition/:idUser')
  async addMedicalCondition(
    @Param('idUser') idUser: number,
    @Body('condition') condition: string,
  ): Promise<void> {
    const patientCondition = new Patient(this.repo);
    try {
      await patientCondition.addMedicalCondition(condition, idUser);
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }
}
