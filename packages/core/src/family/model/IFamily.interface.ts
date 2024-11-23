import { ICaregiver } from "../../caregiver";
import { IPatient } from "../../patient";

export interface IFamily {
  id: number;
  name: string;
  caregiver?: ICaregiver[];
  patient: IPatient;
}
