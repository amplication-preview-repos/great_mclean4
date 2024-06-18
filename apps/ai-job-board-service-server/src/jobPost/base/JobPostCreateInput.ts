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
import { ApplicationCreateNestedManyWithoutJobPostsInput } from "./ApplicationCreateNestedManyWithoutJobPostsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EmployerWhereUniqueInput } from "../../employer/base/EmployerWhereUniqueInput";

@InputType()
class JobPostCreateInput {
  @ApiProperty({
    required: false,
    type: () => ApplicationCreateNestedManyWithoutJobPostsInput,
  })
  @ValidateNested()
  @Type(() => ApplicationCreateNestedManyWithoutJobPostsInput)
  @IsOptional()
  @Field(() => ApplicationCreateNestedManyWithoutJobPostsInput, {
    nullable: true,
  })
  applications?: ApplicationCreateNestedManyWithoutJobPostsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => EmployerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployerWhereUniqueInput)
  @IsOptional()
  @Field(() => EmployerWhereUniqueInput, {
    nullable: true,
  })
  employer?: EmployerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { JobPostCreateInput as JobPostCreateInput };
