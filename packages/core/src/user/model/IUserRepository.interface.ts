import { IUser } from "./IUser.interface";

export interface IUserRepository {
    getAllUsers(): Promise<IUser[]>;
    getUserByName(name: string): Promise<IUser>
    getUserById(id: number): Promise<IUser | undefined>;
    createUser(user: IUser): Promise<void>;
    updateUser(user: IUser): Promise<void>;
    deleteUser(id: number): Promise<void>;
}