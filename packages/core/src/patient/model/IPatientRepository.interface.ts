import { IUserRepository } from "../../user/model/IUserRepository.interface";

export interface IPatientRepository extends IUserRepository {
  addMedicalCondition(condition: string, idUser: number): Promise<void>;
}
