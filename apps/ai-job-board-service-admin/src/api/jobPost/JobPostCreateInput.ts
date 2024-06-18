import { ApplicationCreateNestedManyWithoutJobPostsInput } from "./ApplicationCreateNestedManyWithoutJobPostsInput";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";

export type JobPostCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutJobPostsInput;
  description?: string | null;
  employer?: EmployerWhereUniqueInput | null;
  location?: string | null;
  title?: string | null;
};
