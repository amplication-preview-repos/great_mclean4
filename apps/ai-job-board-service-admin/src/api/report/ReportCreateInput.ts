import { InputJsonValue } from "../../types";

export type ReportCreateInput = {
  data?: InputJsonValue;
  generatedAt?: Date | null;
  graph?: InputJsonValue;
  reportName?: string | null;
  reportType?: "Option1" | null;
};
