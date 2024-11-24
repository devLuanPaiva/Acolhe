import { Injectable } from '@nestjs/common';
import { IUser } from '@acolhe/core';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class UserProvider {
  constructor(readonly prisma: PrismaService) {}

  async getAllUsers(): Promise<IUser[]> {
    const users = await this.prisma.user.findMany();
    return users as any;
  }

  async getUserByName(name: string): Promise<IUser> {
    const users = await this.prisma.user.findMany({
      where: { name },
    });
    return users[0] as any;
  }

  async getUserById(id: number): Promise<IUser | undefined> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user as any;
  }

  async createUser(user: IUser): Promise<void> {
    await this.prisma.user.create({ data: user });
  }
  async deleteUser(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
