import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { JobPostWhereUniqueInput } from "../jobPost/JobPostWhereUniqueInput";

export type ApplicationUpdateInput = {
  applicant?: ApplicantWhereUniqueInput | null;
  jobPost?: JobPostWhereUniqueInput | null;
  status?: "Option1" | null;
};
