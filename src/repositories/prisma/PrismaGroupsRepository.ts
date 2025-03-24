import { Group } from "@prisma/client";
import { CreateGroupParams, GroupsRepository } from "../GroupsRepository";
import prisma from "../../database";

export class PrismaGroupsRepository implements GroupsRepository {
  async find(): Promise<Group[]> {
    return prisma.group.findMany();
  }

  async findById(id: number): Promise<Group | null> {
    return prisma.group.findUnique({ where: { id }, include: { leads: true } });
  }

  async create(params: CreateGroupParams): Promise<Group> {
    return prisma.group.create({ data: params });
  }

  async updateById(id: number, params: Partial<CreateGroupParams>): Promise<Group | null> {
    return prisma.group.update({ where: { id }, data: params });
  }

  async deleteById(id: number): Promise<Group | null> {
    return prisma.group.delete({ where: { id } });
  }

  async addLead(groupId: number, leadId: number): Promise<Group> {
    return prisma.group.update({
      where: { id: groupId },
      data: {
        leads: {
          connect: {
            id: leadId,
          },
        },
      },
    });
  }

  async removeLead(groupId: number, leadId: number): Promise<Group> {
    return prisma.group.update({
      where: { id: groupId },
      data: {
        leads: {
          disconnect: { id: leadId },
        },
      },
    });
  }
}
