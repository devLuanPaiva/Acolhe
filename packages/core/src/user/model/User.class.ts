import { IUser } from "./IUser.interface";
import { IUserRepository } from "./IUserRepository.interface";

export default class User {
  constructor(private readonly repo: IUserRepository) {}

  async getAllUsers(): Promise<IUser[]> {
    const users = await this.repo.getAllUsers();
    if (!users || users.length === 0) {
      throw new Error("Nenhum usuário encontrado.");
    }
    return users;
  }
  async getUserByName(name: string): Promise<IUser> {
    if (!name) {
      throw new Error("Nome de usuário inválido.");
    }
    const user = await this.repo.getUserByName(name);
    if (!user) {
      throw new Error(`Usuário não foi encontrado.`);
    }
    return user;
  }

  async getUserById(id: number): Promise<IUser | undefined> {
    if (!id || id <= 0) {
      throw new Error("ID de usuário inválido.");
    }
    const user = await this.repo.getUserById(id);
    if (!user) {
      throw new Error(`Usuário não foi encontrado.`);
    }
    return user;
  }

  async createUser(user: IUser): Promise<void> {
    console.log(user);
    if (!user.id || !user.name || !user.email) {
      throw new Error(
        "Dados do usuário inválidos. Nome e e-mail são obrigatórios."
      );
    }
    const existingUser = await this.repo.getUserByName(user.name);
    console.log(existingUser);
    if (existingUser) {
      throw new Error(`Usuário já existe.`);
    }
    await this.repo.createUser(user);
  }

  async deleteUser(id: number): Promise<void> {
    if (!id || id <= 0) {
      throw new Error("ID de usuário inválido para exclusão.");
    }
    const existingUser = await this.repo.getUserById(id);
    if (!existingUser) {
      throw new Error(`Usuário não foi encontrado.`);
    }
    await this.repo.deleteUser(id);
  }
}
