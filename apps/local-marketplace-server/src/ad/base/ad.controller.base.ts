/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AdService } from "../ad.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AdCreateInput } from "./AdCreateInput";
import { Ad } from "./Ad";
import { AdFindManyArgs } from "./AdFindManyArgs";
import { AdWhereUniqueInput } from "./AdWhereUniqueInput";
import { AdUpdateInput } from "./AdUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AdControllerBase {
  constructor(
    protected readonly service: AdService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Ad })
  @nestAccessControl.UseRoles({
    resource: "Ad",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAd(@common.Body() data: AdCreateInput): Promise<Ad> {
    return await this.service.createAd({
      data: data,
      select: {
        content: true,
        createdAt: true,
        id: true,
        targetInterests: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Ad] })
  @ApiNestedQuery(AdFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Ad",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ads(@common.Req() request: Request): Promise<Ad[]> {
    const args = plainToClass(AdFindManyArgs, request.query);
    return this.service.ads({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,
        targetInterests: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Ad })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ad",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ad(@common.Param() params: AdWhereUniqueInput): Promise<Ad | null> {
    const result = await this.service.ad({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,
        targetInterests: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Ad })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ad",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAd(
    @common.Param() params: AdWhereUniqueInput,
    @common.Body() data: AdUpdateInput
  ): Promise<Ad | null> {
    try {
      return await this.service.updateAd({
        where: params,
        data: data,
        select: {
          content: true,
          createdAt: true,
          id: true,
          targetInterests: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Ad })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ad",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAd(
    @common.Param() params: AdWhereUniqueInput
  ): Promise<Ad | null> {
    try {
      return await this.service.deleteAd({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,
          targetInterests: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}