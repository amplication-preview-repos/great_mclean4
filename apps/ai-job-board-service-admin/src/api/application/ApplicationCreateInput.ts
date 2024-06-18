import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { JobPostWhereUniqueInput } from "../jobPost/JobPostWhereUniqueInput";

export type ApplicationCreateInput = {
  applicant?: ApplicantWhereUniqueInput | null;
  jobPost?: JobPostWhereUniqueInput | null;
  status?: "Option1" | null;
};
