import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TutorTestServiceBase } from "./base/tutorTest.service.base";

@Injectable()
export class TutorTestService extends TutorTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
