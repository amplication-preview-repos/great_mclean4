import { ApplicationUpdateManyWithoutApplicantsInput } from "./ApplicationUpdateManyWithoutApplicantsInput";
import { InputJsonValue } from "../../types";

export type ApplicantUpdateInput = {
  applications?: ApplicationUpdateManyWithoutApplicantsInput;
  email?: string | null;
  name?: string | null;
  resume?: InputJsonValue;
};
