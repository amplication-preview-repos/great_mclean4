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
import { JobPostWhereInput } from "./JobPostWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class JobPostListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => JobPostWhereInput,
  })
  @ValidateNested()
  @Type(() => JobPostWhereInput)
  @IsOptional()
  @Field(() => JobPostWhereInput, {
    nullable: true,
  })
  every?: JobPostWhereInput;

  @ApiProperty({
    required: false,
    type: () => JobPostWhereInput,
  })
  @ValidateNested()
  @Type(() => JobPostWhereInput)
  @IsOptional()
  @Field(() => JobPostWhereInput, {
    nullable: true,
  })
  some?: JobPostWhereInput;

  @ApiProperty({
    required: false,
    type: () => JobPostWhereInput,
  })
  @ValidateNested()
  @Type(() => JobPostWhereInput)
  @IsOptional()
  @Field(() => JobPostWhereInput, {
    nullable: true,
  })
  none?: JobPostWhereInput;
}
export { JobPostListRelationFilter as JobPostListRelationFilter };
