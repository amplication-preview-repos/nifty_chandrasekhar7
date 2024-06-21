import * as graphql from "@nestjs/graphql";
import { AiAssistantResolverBase } from "./base/aiAssistant.resolver.base";
import { AiAssistant } from "./base/AiAssistant";
import { AiAssistantService } from "./aiAssistant.service";

@graphql.Resolver(() => AiAssistant)
export class AiAssistantResolver extends AiAssistantResolverBase {
  constructor(protected readonly service: AiAssistantService) {
    super(service);
  }
}
