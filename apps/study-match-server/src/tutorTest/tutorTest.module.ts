import { Module } from "@nestjs/common";
import { TutorTestModuleBase } from "./base/tutorTest.module.base";
import { TutorTestService } from "./tutorTest.service";
import { TutorTestController } from "./tutorTest.controller";
import { TutorTestResolver } from "./tutorTest.resolver";

@Module({
  imports: [TutorTestModuleBase],
  controllers: [TutorTestController],
  providers: [TutorTestService, TutorTestResolver],
  exports: [TutorTestService],
})
export class TutorTestModule {}
