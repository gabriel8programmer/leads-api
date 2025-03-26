import { Lead } from "@prisma/client";
import {
  CreateLeadParams,
  FindLeadsParams,
  LeadsRepository,
  LeadWhereParams,
} from "../LeadsRepository";
import prisma from "../../database";

export class PrismaLeadsRepository implements LeadsRepository {
  async find(params: FindLeadsParams): Promise<Lead[]> {
    return prisma.lead.findMany({
      where: {
        name: {
          contains: params.where?.name?.like,
          equals: params.where?.name?.equals,
          mode: params.where?.name?.mode,
        },
        status: params.where?.status,
        campaigns: params.where?.campaigns,
        groups: params.where?.groups,
      },
      orderBy: { [params.sortBy ?? "name"]: params.order },
      skip: params.offset,
      take: params.limit,
      include: {
        groups: params.include?.groups,
        campaigns: params.include?.campaigns,
      },
    });
  }

  async findById(id: number): Promise<Lead | null> {
    return prisma.lead.findUnique({
      where: { id },
      include: { campaigns: true, groups: true },
    });
  }

  async create(params: CreateLeadParams): Promise<Lead> {
    return prisma.lead.create({
      data: params,
    });
  }

  async count(where: LeadWhereParams): Promise<number> {
    return prisma.lead.count({
      where: {
        name: {
          contains: where?.name?.like,
          equals: where?.name?.equals,
          mode: where?.name?.mode,
        },
        status: where?.status,
        campaigns: where?.campaigns,
        groups: where?.groups,
      },
    });
  }

  async updateById(id: number, params: Partial<CreateLeadParams>): Promise<Lead | null> {
    return prisma.lead.update({
      where: {
        id,
      },
      data: params,
    });
  }

  async deleteById(id: number): Promise<Lead | null> {
    return prisma.lead.delete({ where: { id } });
  }
}
