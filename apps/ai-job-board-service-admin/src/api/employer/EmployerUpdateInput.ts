import { JobPostUpdateManyWithoutEmployersInput } from "./JobPostUpdateManyWithoutEmployersInput";

export type EmployerUpdateInput = {
  company?: string | null;
  email?: string | null;
  jobPosts?: JobPostUpdateManyWithoutEmployersInput;
  name?: string | null;
};
