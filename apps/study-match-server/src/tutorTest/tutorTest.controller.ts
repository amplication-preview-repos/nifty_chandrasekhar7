import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TutorTestService } from "./tutorTest.service";
import { TutorTestControllerBase } from "./base/tutorTest.controller.base";

@swagger.ApiTags("tutorTests")
@common.Controller("tutorTests")
export class TutorTestController extends TutorTestControllerBase {
  constructor(protected readonly service: TutorTestService) {
    super(service);
  }
}
