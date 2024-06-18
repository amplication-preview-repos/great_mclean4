import { JobPost } from "../jobPost/JobPost";

export type Employer = {
  company: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  jobPosts?: Array<JobPost>;
  name: string | null;
  updatedAt: Date;
};
