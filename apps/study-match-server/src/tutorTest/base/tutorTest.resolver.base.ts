/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { TutorTest } from "./TutorTest";
import { TutorTestCountArgs } from "./TutorTestCountArgs";
import { TutorTestFindManyArgs } from "./TutorTestFindManyArgs";
import { TutorTestFindUniqueArgs } from "./TutorTestFindUniqueArgs";
import { DeleteTutorTestArgs } from "./DeleteTutorTestArgs";
import { TutorTestService } from "../tutorTest.service";
@graphql.Resolver(() => TutorTest)
export class TutorTestResolverBase {
  constructor(protected readonly service: TutorTestService) {}

  async _tutorTestsMeta(
    @graphql.Args() args: TutorTestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TutorTest])
  async tutorTests(
    @graphql.Args() args: TutorTestFindManyArgs
  ): Promise<TutorTest[]> {
    return this.service.tutorTests(args);
  }

  @graphql.Query(() => TutorTest, { nullable: true })
  async tutorTest(
    @graphql.Args() args: TutorTestFindUniqueArgs
  ): Promise<TutorTest | null> {
    const result = await this.service.tutorTest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TutorTest)
  async deleteTutorTest(
    @graphql.Args() args: DeleteTutorTestArgs
  ): Promise<TutorTest | null> {
    try {
      return await this.service.deleteTutorTest(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
