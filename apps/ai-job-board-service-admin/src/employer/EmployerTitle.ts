import { Employer as TEmployer } from "../api/employer/Employer";

export const EMPLOYER_TITLE_FIELD = "name";

export const EmployerTitle = (record: TEmployer): string => {
  return record.name?.toString() || String(record.id);
};
