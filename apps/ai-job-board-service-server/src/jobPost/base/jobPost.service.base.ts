/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  JobPost as PrismaJobPost,
  Application as PrismaApplication,
  Employer as PrismaEmployer,
} from "@prisma/client";

export class JobPostServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.JobPostCountArgs, "select">): Promise<number> {
    return this.prisma.jobPost.count(args);
  }

  async jobPosts(args: Prisma.JobPostFindManyArgs): Promise<PrismaJobPost[]> {
    return this.prisma.jobPost.findMany(args);
  }
  async jobPost(
    args: Prisma.JobPostFindUniqueArgs
  ): Promise<PrismaJobPost | null> {
    return this.prisma.jobPost.findUnique(args);
  }
  async createJobPost(args: Prisma.JobPostCreateArgs): Promise<PrismaJobPost> {
    return this.prisma.jobPost.create(args);
  }
  async updateJobPost(args: Prisma.JobPostUpdateArgs): Promise<PrismaJobPost> {
    return this.prisma.jobPost.update(args);
  }
  async deleteJobPost(args: Prisma.JobPostDeleteArgs): Promise<PrismaJobPost> {
    return this.prisma.jobPost.delete(args);
  }

  async findApplications(
    parentId: string,
    args: Prisma.ApplicationFindManyArgs
  ): Promise<PrismaApplication[]> {
    return this.prisma.jobPost
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .applications(args);
  }

  async getEmployer(parentId: string): Promise<PrismaEmployer | null> {
    return this.prisma.jobPost
      .findUnique({
        where: { id: parentId },
      })
      .employer();
  }
}