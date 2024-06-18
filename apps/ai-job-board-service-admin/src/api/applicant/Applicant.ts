import { Application } from "../application/Application";
import { JsonValue } from "type-fest";

export type Applicant = {
  applications?: Array<Application>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  resume: JsonValue;
  updatedAt: Date;
};
