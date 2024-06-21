import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiAssistantServiceBase } from "./base/aiAssistant.service.base";

@Injectable()
export class AiAssistantService extends AiAssistantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
