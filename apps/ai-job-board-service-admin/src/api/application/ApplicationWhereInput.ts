import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JobPostWhereUniqueInput } from "../jobPost/JobPostWhereUniqueInput";

export type ApplicationWhereInput = {
  applicant?: ApplicantWhereUniqueInput;
  id?: StringFilter;
  jobPost?: JobPostWhereUniqueInput;
  status?: "Option1";
};
