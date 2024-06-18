import { ApplicationUpdateManyWithoutJobPostsInput } from "./ApplicationUpdateManyWithoutJobPostsInput";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";

export type JobPostUpdateInput = {
  applications?: ApplicationUpdateManyWithoutJobPostsInput;
  description?: string | null;
  employer?: EmployerWhereUniqueInput | null;
  location?: string | null;
  title?: string | null;
};
