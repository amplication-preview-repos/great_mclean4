import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdService } from "./ad.service";
import { AdControllerBase } from "./base/ad.controller.base";

@swagger.ApiTags("ads")
@common.Controller("ads")
export class AdController extends AdControllerBase {
  constructor(
    protected readonly service: AdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
