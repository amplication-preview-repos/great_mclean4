import { SortOrder } from "../../util/SortOrder";

export type JobPostOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  employerId?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
