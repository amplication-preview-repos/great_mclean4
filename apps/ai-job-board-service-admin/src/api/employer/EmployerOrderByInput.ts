import { SortOrder } from "../../util/SortOrder";

export type EmployerOrderByInput = {
  company?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
