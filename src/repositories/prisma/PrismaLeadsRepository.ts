import { Lead } from '@prisma/client'
import {
  CreateLeadParams,
  FindLeadsParams,
  LeadsRepository,
  LeadWhereParams,
} from '../LeadsRepository'
import prisma from '../../database'

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
        // conditional for apply filter by campaigns of no
        ...(params.where?.campaignId || params.where?.campaignStatus
          ? {
              campaigns: {
                some: {
                  campaignId: params?.where?.campaignId,
                  status: params?.where?.campaignStatus,
                },
              },
            }
          : {}),
        // conditional for apply filter by groups of no
        ...(params.where?.groupId
          ? {
              groups: {
                some: {
                  id: params?.where?.groupId,
                },
              },
            }
          : {}),
      },
      orderBy: { [params.sortBy ?? 'name']: params.order },
      skip: params.offset,
      take: params.limit,
      include: {
        groups: params.include?.groups,
        campaigns: params.include?.campaigns,
      },
    })
  }

  async findById(id: number): Promise<Lead | null> {
    return prisma.lead.findUnique({
      where: { id },
      include: { campaigns: true, groups: true },
    })
  }

  async create(params: CreateLeadParams): Promise<Lead> {
    return prisma.lead.create({
      data: params,
    })
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
        // conditional for apply filter by campaigns of no
        ...(where?.campaignId || where?.campaignStatus
          ? {
              campaigns: {
                some: {
                  campaignId: where?.campaignId,
                  status: where?.campaignStatus,
                },
              },
            }
          : {}),
        // conditional for apply filter by groups of no
        ...(where?.groupId
          ? {
              groups: {
                some: {
                  id: where?.groupId,
                },
              },
            }
          : {}),
      },
    })
  }

  async updateById(id: number, params: Partial<CreateLeadParams>): Promise<Lead | null> {
    return prisma.lead.update({
      where: {
        id,
      },
      data: params,
    })
  }

  async deleteById(id: number): Promise<Lead | null> {
    return prisma.lead.delete({ where: { id } })
  }
}
