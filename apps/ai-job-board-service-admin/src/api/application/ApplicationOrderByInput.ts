import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  applicantId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobPostId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
