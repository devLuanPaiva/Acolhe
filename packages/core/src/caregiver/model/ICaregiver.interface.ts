import { IRequest } from "../../request";
import { IUser } from "../../user";

export interface ICaregiver extends IUser {
  dailyValue: number;
  avaliations: string[];
  requests: IRequest[]
}
