import { SortOrder } from "../../util/SortOrder";

export type AdOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  targetInterests?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
