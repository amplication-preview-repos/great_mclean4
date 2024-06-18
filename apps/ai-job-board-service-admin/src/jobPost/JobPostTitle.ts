import { JobPost as TJobPost } from "../api/jobPost/JobPost";

export const JOBPOST_TITLE_FIELD = "title";

export const JobPostTitle = (record: TJobPost): string => {
  return record.title?.toString() || String(record.id);
};
