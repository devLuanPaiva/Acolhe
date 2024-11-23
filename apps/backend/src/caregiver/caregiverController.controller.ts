import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CaregiverProvider } from './caregiverProvider.provider';
import { Caregiver, ICaregiver } from '@acolhe/core';

@Controller('api/caregiver')
export class CaregiverController {
  constructor(private readonly repo: CaregiverProvider) {}

  @Get()
  async listCaregiver(): Promise<ICaregiver[]> {
    const caregiver = new Caregiver(this.repo);
    try {
      return await caregiver.listCaregiver();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Post('/diary')
  async addDiary(@Body() value: number, userId: number) {
    const caregiver = new Caregiver(this.repo);
    try {
      return await caregiver.addDiary(value, userId);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Get('/diary')
  async getCaregiverByDiary(@Body() valueMin: number, valueMax: number) {
    const caregiver = new Caregiver(this.repo);
    try {
      return await caregiver.getCaregiverByDiary(valueMin, valueMax);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Post('/evaluate:userId')
  async evaluateCaregiver(
    @Body() value: string,
    @Param('userId') userId: number,
  ) {
    const caregiver = new Caregiver(this.repo);
    try {
      return await caregiver.evaluateCaregiver(value, userId);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
