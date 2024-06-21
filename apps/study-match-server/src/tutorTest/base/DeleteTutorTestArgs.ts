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
import { TutorTestWhereUniqueInput } from "./TutorTestWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteTutorTestArgs {
  @ApiProperty({
    required: true,
    type: () => TutorTestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TutorTestWhereUniqueInput)
  @Field(() => TutorTestWhereUniqueInput, { nullable: false })
  where!: TutorTestWhereUniqueInput;
}

export { DeleteTutorTestArgs as DeleteTutorTestArgs };
