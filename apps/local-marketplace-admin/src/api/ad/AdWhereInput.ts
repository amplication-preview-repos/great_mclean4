import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  targetInterests?: StringNullableFilter;
  title?: StringNullableFilter;
};
