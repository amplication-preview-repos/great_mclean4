import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobPostListRelationFilter } from "../jobPost/JobPostListRelationFilter";

export type EmployerWhereInput = {
  company?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  jobPosts?: JobPostListRelationFilter;
  name?: StringNullableFilter;
};
