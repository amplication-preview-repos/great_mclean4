import { Applicant } from "../applicant/Applicant";
import { JobPost } from "../jobPost/JobPost";

export type Application = {
  applicant?: Applicant | null;
  createdAt: Date;
  id: string;
  jobPost?: JobPost | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
