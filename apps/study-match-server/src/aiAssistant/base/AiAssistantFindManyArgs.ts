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
import { AiAssistantWhereInput } from "./AiAssistantWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AiAssistantOrderByInput } from "./AiAssistantOrderByInput";

@ArgsType()
class AiAssistantFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AiAssistantWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AiAssistantWhereInput, { nullable: true })
  @Type(() => AiAssistantWhereInput)
  where?: AiAssistantWhereInput;

  @ApiProperty({
    required: false,
    type: [AiAssistantOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AiAssistantOrderByInput], { nullable: true })
  @Type(() => AiAssistantOrderByInput)
  orderBy?: Array<AiAssistantOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AiAssistantFindManyArgs as AiAssistantFindManyArgs };
