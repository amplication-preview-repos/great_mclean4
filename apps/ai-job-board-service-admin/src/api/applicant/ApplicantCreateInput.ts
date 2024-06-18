import { ApplicationCreateNestedManyWithoutApplicantsInput } from "./ApplicationCreateNestedManyWithoutApplicantsInput";
import { InputJsonValue } from "../../types";

export type ApplicantCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutApplicantsInput;
  email?: string | null;
  name?: string | null;
  resume?: InputJsonValue;
};
