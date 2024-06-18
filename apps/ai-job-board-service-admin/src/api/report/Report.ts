import { JsonValue } from "type-fest";

export type Report = {
  createdAt: Date;
  data: JsonValue;
  generatedAt: Date | null;
  graph: JsonValue;
  id: string;
  reportName: string | null;
  reportType?: "Option1" | null;
  updatedAt: Date;
};
