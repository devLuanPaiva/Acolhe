import { Controller, Get, Param } from '@nestjs/common';
import { RequestProvider } from './requestProvider.provider';
import { IRequest, Request } from '@acolhe/core';

@Controller('api/request')
export class RequestController {
  constructor(private readonly repo: RequestProvider) {}

  @Get(':userId')
  async getRequestsByUserId(
    @Param('userId') userId: number,
  ): Promise<IRequest[]> {
    const request = new Request(this.repo);
    try {
      return await this.repo.getRequestByUserId(userId);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
