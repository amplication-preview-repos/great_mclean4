import { JobPostCreateNestedManyWithoutEmployersInput } from "./JobPostCreateNestedManyWithoutEmployersInput";

export type EmployerCreateInput = {
  company?: string | null;
  email?: string | null;
  jobPosts?: JobPostCreateNestedManyWithoutEmployersInput;
  name?: string | null;
};
