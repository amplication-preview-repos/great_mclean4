import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  generatedAt?: SortOrder;
  graph?: SortOrder;
  id?: SortOrder;
  reportName?: SortOrder;
  reportType?: SortOrder;
  updatedAt?: SortOrder;
};
