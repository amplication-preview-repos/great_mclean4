import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: string | null;
  description?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  price?: number | null;
  title?: string | null;
};
