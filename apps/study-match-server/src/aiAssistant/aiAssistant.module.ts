import { Module } from "@nestjs/common";
import { AiAssistantModuleBase } from "./base/aiAssistant.module.base";
import { AiAssistantService } from "./aiAssistant.service";
import { AiAssistantController } from "./aiAssistant.controller";
import { AiAssistantResolver } from "./aiAssistant.resolver";

@Module({
  imports: [AiAssistantModuleBase],
  controllers: [AiAssistantController],
  providers: [AiAssistantService, AiAssistantResolver],
  exports: [AiAssistantService],
})
export class AiAssistantModule {}
