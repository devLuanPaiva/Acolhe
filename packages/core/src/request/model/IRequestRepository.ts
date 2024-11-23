import { IRequest } from "./IRequest.interface";

export interface IRequestRepository {
  create(request: IRequest): Promise<void>;
  getRequestByUserId(userId: number): Promise<IRequest[]>;
  updateStatusRequest(
    requestId: number,
    status: Partial<IRequest>
  ): Promise<void>;
  deleteRequest(requestId: number): Promise<void>;
}
