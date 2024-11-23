import { IUserRepository } from "../../user/model/IUserRepository.interface";
import { ICaregiver } from "./ICaregiver.interface";

export interface ICaregiverRepository extends IUserRepository {
    addDiary(value: number, userId: number): Promise<void>;
    getCaregiverByDiary(valueMin: number, valueMax: number): Promise<ICaregiver[]>;
    listCaregiver(): Promise<ICaregiver[]>;
    evaluateCaregiver(value: string, userId: number): Promise<void>; 
  }
  