import { IPatientRepository } from "./IPatientRepository.interface";

export default class Patient{
    constructor(private readonly repo: IPatientRepository){}
    async addMedicalCondition(condition:string, idUser: number): Promise<void>{
        if (!condition || condition.trim().length === 0) {
            throw new Error("A condição médica não pode ser vazia.");
        }
        await this.repo.addMedicalCondition(condition, idUser);
    }
}