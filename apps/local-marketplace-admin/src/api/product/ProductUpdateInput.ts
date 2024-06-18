import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: string | null;
  description?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number | null;
  title?: string | null;
};
