/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JobPostWhereUniqueInput } from "./JobPostWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { JobPostUpdateInput } from "./JobPostUpdateInput";

@ArgsType()
class UpdateJobPostArgs {
  @ApiProperty({
    required: true,
    type: () => JobPostWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobPostWhereUniqueInput)
  @Field(() => JobPostWhereUniqueInput, { nullable: false })
  where!: JobPostWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => JobPostUpdateInput,
  })
  @ValidateNested()
  @Type(() => JobPostUpdateInput)
  @Field(() => JobPostUpdateInput, { nullable: false })
  data!: JobPostUpdateInput;
}

export { UpdateJobPostArgs as UpdateJobPostArgs };
