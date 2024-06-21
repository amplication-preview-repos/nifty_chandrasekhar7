import * as graphql from "@nestjs/graphql";
import { TutorTestResolverBase } from "./base/tutorTest.resolver.base";
import { TutorTest } from "./base/TutorTest";
import { TutorTestService } from "./tutorTest.service";

@graphql.Resolver(() => TutorTest)
export class TutorTestResolver extends TutorTestResolverBase {
  constructor(protected readonly service: TutorTestService) {
    super(service);
  }
}
