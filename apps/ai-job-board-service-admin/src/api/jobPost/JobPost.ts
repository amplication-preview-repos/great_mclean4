import { Application } from "../application/Application";
import { Employer } from "../employer/Employer";

export type JobPost = {
  applications?: Array<Application>;
  createdAt: Date;
  description: string | null;
  employer?: Employer | null;
  id: string;
  location: string | null;
  title: string | null;
  updatedAt: Date;
};
