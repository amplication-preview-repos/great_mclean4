import { SortOrder } from "../../util/SortOrder";

export type ApplicantOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  resume?: SortOrder;
  updatedAt?: SortOrder;
};
