import { ICaregiver } from "../../caregiver";
import { IPatient } from "../../patient";
import { ERequestStatus } from "./ERequestStatus.enum";

export interface IRequest {
    value: number;
    patient: IPatient
    caregiver: ICaregiver
    status: ERequestStatus;
}