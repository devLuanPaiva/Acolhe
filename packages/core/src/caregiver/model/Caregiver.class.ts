import { ICaregiver } from "./ICaregiver.interface";
import { ICaregiverRepository } from "./ICaregiverRepository.interface";

export default class Caregiver {
    constructor(private readonly repo: ICaregiverRepository) {}

    async addDiary(value: number, userId: number): Promise<void> {
        if (value <= 0) {
            throw new Error("O valor do diário deve ser maior que zero.");
        }
        if (!userId || userId <= 0) {
            throw new Error("ID do usuário inválido.");
        }

        const caregiver = await this.repo.getUserById(userId);
        if (!caregiver) {
            throw new Error(`Nenhum cuidador encontrado para o ID ${userId}.`);
        }

        await this.repo.addDiary(value, userId);
        this.notifyCaregiver(`Um novo diário foi adicionado ao cuidador com ID ${userId}.`);
    }

    async getCaregiverByDiary(valueMin: number, valueMax: number): Promise<ICaregiver[]> {
        if (valueMin < 0 || valueMax < 0 || valueMin > valueMax) {
            throw new Error("Os valores mínimo e máximo são inválidos.");
        }

        const caregivers = await this.repo.getCaregiverByDiary(valueMin, valueMax);
        if (!caregivers || caregivers.length === 0) {
            throw new Error("Nenhum cuidador encontrado dentro do intervalo de diários especificado.");
        }

        return caregivers;
    }

    async listCaregiver(): Promise<ICaregiver[]> {
        const caregivers = await this.repo.listCaregiver();
        if (!caregivers || caregivers.length === 0) {
            throw new Error("Nenhum cuidador encontrado.");
        }
        return caregivers;
    }

    async evaluateCaregiver(value: string): Promise<void> {
        if (!value || value.trim() === "") {
            throw new Error("A avaliação do cuidador não pode estar vazia.");
        }

        await this.repo.evaluateCaregiver(value);
    }

    async notifyCaregiver(mensage: string): Promise<string> {
        if (!mensage || mensage.trim() === "") {
            throw new Error("Mensagem de notificação inválida.");
        }
        return(`${mensage}`);
        
    }
}
