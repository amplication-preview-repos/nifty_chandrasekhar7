import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AiAssistantService } from "./aiAssistant.service";
import { AiAssistantControllerBase } from "./base/aiAssistant.controller.base";

@swagger.ApiTags("aiAssistants")
@common.Controller("aiAssistants")
export class AiAssistantController extends AiAssistantControllerBase {
  constructor(protected readonly service: AiAssistantService) {
    super(service);
  }
}
