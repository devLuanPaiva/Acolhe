import { IExperience } from "../../experience";
import { IUser } from "../../user";

export interface ICaregiver extends IUser {
  dailyValue: number;
  experiences?: IExperience[];
}
