import { IUser } from "../../user";

export interface IPatient extends IUser{
    medicalCondition: string;
}