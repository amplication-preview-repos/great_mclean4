/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApplicantWhereUniqueInput } from "../../applicant/base/ApplicantWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { JobPostWhereUniqueInput } from "../../jobPost/base/JobPostWhereUniqueInput";
import { EnumApplicationStatus } from "./EnumApplicationStatus";

@InputType()
class ApplicationCreateInput {
  @ApiProperty({
    required: false,
    type: () => ApplicantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ApplicantWhereUniqueInput)
  @IsOptional()
  @Field(() => ApplicantWhereUniqueInput, {
    nullable: true,
  })
  applicant?: ApplicantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => JobPostWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobPostWhereUniqueInput)
  @IsOptional()
  @Field(() => JobPostWhereUniqueInput, {
    nullable: true,
  })
  jobPost?: JobPostWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumApplicationStatus,
  })
  @IsEnum(EnumApplicationStatus)
  @IsOptional()
  @Field(() => EnumApplicationStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { ApplicationCreateInput as ApplicationCreateInput };