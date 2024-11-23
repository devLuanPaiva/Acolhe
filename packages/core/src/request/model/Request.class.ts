import Caregiver from "../../caregiver/model/Caregiver.class";
import { ERequestStatus } from "./ERequestStatus.enum";
import { IRequest } from "./IRequest.interface";
import { IRequestRepository } from "./IRequestRepository";

export default class Request {
  constructor(
    private readonly repo: IRequestRepository,
    private readonly caregiverService: Caregiver 
  ) {}

  async createRequest(request: IRequest): Promise<void> {
    if (!request || !request.patient.id || !request.carregiver.id) {
      throw new Error(
        "Dados da solicitação inválidos. É necessário informar o usuário e o cuidador."
      );
    }

    const newRequest: IRequest = {
      ...request,
      status: ERequestStatus.PENDING,
    };

    await this.repo.create(newRequest);

    await this.caregiverService.notifyCaregiver(
      `Uma nova solicitação foi criada para o cuidador ${request.carregiver.name}.`
    );
  }

  async getRequestByUserId(userId: number): Promise<IRequest[]> {
    if (!userId || userId <= 0) {
      throw new Error("ID de usuário inválido.");
    }

    const requests = await this.repo.getRequestByUserId(userId);
    if (!requests || requests.length === 0) {
      throw new Error(`Nenhuma solicitação encontrada para o usuário com ID ${userId}.`);
    }

    return requests;
  }

  async updateStatusRequest(
    requestId: number,
    status: Partial<IRequest>
  ): Promise<void> {
    if (!requestId || requestId <= 0) {
      throw new Error("ID da solicitação inválido.");
    }

    if (!status || !status.status) {
      throw new Error("Status da solicitação inválido.");
    }

    await this.repo.updateStatusRequest(requestId, status);
  }

  async deleteRequest(requestId: number): Promise<void> {
    if (!requestId || requestId <= 0) {
      throw new Error("ID da solicitação inválido.");
    }

    await this.repo.deleteRequest(requestId);
  }
}
