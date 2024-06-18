import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdModuleBase } from "./base/ad.module.base";
import { AdService } from "./ad.service";
import { AdController } from "./ad.controller";
import { AdResolver } from "./ad.resolver";

@Module({
  imports: [AdModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdController],
  providers: [AdService, AdResolver],
  exports: [AdService],
})
export class AdModule {}
