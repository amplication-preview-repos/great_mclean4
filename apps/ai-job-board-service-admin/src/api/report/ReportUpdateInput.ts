import { InputJsonValue } from "../../types";

export type ReportUpdateInput = {
  data?: InputJsonValue;
  generatedAt?: Date | null;
  graph?: InputJsonValue;
  reportName?: string | null;
  reportType?: "Option1" | null;
};
