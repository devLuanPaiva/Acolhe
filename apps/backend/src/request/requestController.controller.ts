import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
      return await request.getRequestByUserId(userId);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Put(':requestId')
  async updateStatusRequest(
    @Param('requestId') requestId: number,
    @Body() status: Partial<IRequest>,
  ) {
    const request = new Request(this.repo);
    try {
      return await request.updateStatusRequest(requestId, status);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Delete(':requestId')
  async deleteRequest(@Param('requestId') requestId: number) {
    const request = new Request(this.repo);
    try {
      return await request.deleteRequest(requestId);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Post()
  async create(@Body() request: IRequest) {
    const requestProvider = new Request(this.repo);
    try {
      return await requestProvider.create(request);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
