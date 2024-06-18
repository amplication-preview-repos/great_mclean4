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
import { ApplicationService } from "../application.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ApplicationCreateInput } from "./ApplicationCreateInput";
import { Application } from "./Application";
import { ApplicationFindManyArgs } from "./ApplicationFindManyArgs";
import { ApplicationWhereUniqueInput } from "./ApplicationWhereUniqueInput";
import { ApplicationUpdateInput } from "./ApplicationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ApplicationControllerBase {
  constructor(
    protected readonly service: ApplicationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Application })
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createApplication(
    @common.Body() data: ApplicationCreateInput
  ): Promise<Application> {
    return await this.service.createApplication({
      data: {
        ...data,

        applicant: data.applicant
          ? {
              connect: data.applicant,
            }
          : undefined,

        jobPost: data.jobPost
          ? {
              connect: data.jobPost,
            }
          : undefined,
      },
      select: {
        applicant: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        jobPost: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Application] })
  @ApiNestedQuery(ApplicationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async applications(@common.Req() request: Request): Promise<Application[]> {
    const args = plainToClass(ApplicationFindManyArgs, request.query);
    return this.service.applications({
      ...args,
      select: {
        applicant: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        jobPost: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Application })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async application(
    @common.Param() params: ApplicationWhereUniqueInput
  ): Promise<Application | null> {
    const result = await this.service.application({
      where: params,
      select: {
        applicant: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        jobPost: {
          select: {
            id: true,
          },
        },

        status: true,
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
  @swagger.ApiOkResponse({ type: Application })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateApplication(
    @common.Param() params: ApplicationWhereUniqueInput,
    @common.Body() data: ApplicationUpdateInput
  ): Promise<Application | null> {
    try {
      return await this.service.updateApplication({
        where: params,
        data: {
          ...data,

          applicant: data.applicant
            ? {
                connect: data.applicant,
              }
            : undefined,

          jobPost: data.jobPost
            ? {
                connect: data.jobPost,
              }
            : undefined,
        },
        select: {
          applicant: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          jobPost: {
            select: {
              id: true,
            },
          },

          status: true,
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
  @swagger.ApiOkResponse({ type: Application })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteApplication(
    @common.Param() params: ApplicationWhereUniqueInput
  ): Promise<Application | null> {
    try {
      return await this.service.deleteApplication({
        where: params,
        select: {
          applicant: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          jobPost: {
            select: {
              id: true,
            },
          },

          status: true,
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
