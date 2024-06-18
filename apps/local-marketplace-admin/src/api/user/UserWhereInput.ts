import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  interests?: StringNullableFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  username?: StringFilter;
};
