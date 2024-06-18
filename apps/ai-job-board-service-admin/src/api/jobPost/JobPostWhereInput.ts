import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployerWhereUniqueInput } from "../employer/EmployerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type JobPostWhereInput = {
  applications?: ApplicationListRelationFilter;
  description?: StringNullableFilter;
  employer?: EmployerWhereUniqueInput;
  id?: StringFilter;
  location?: StringNullableFilter;
  title?: StringNullableFilter;
};
