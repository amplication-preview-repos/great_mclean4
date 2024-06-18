import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReportWhereInput = {
  data?: JsonFilter;
  generatedAt?: DateTimeNullableFilter;
  graph?: JsonFilter;
  id?: StringFilter;
  reportName?: StringNullableFilter;
  reportType?: "Option1";
};
