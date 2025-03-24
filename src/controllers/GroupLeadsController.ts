import { Handler } from "express";
import { GetLeadsRequestSchema } from "./schemas/LeadRequestSchema";
import { CreateGroupLeadRequestScheam } from "./schemas/GroupRequestSchema";
import { GroupsRepository } from "../repositories/GroupsRepository";
import { LeadsRepository, LeadWhereParams } from "../repositories/LeadsRepository";

export class GroupLeadsController {
  constructor(
    private readonly groupsRepository: GroupsRepository,
    private readonly leadsRepository: LeadsRepository
  ) {}

  getLeads: Handler = async (req, res, next) => {
    try {
      const groupId = Number(req.params.groupId);
      const query = GetLeadsRequestSchema.parse(req.query);
      const { page = "1", pageSize = "10", name, status, sortBy = "name", order = "asc" } = query;

      const limit = Number(pageSize);
      const offset = (Number(page) - 1) * limit;

      const where: LeadWhereParams = { groupId };

      if (name) where.name = { like: name, mode: "insensitive" };
      if (status) where.status = status;

      const leads = await this.leadsRepository.find({
        where,
        sortBy,
        order,
        limit,
        offset,
        include: { groups: true },
      });

      const total = await this.leadsRepository.count(where);

      res.json({
        leads,
        meta: {
          page: Number(page),
          pageSize: limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      next(error);
    }
  };

  addLead: Handler = async (req, res, next) => {
    try {
      const groupId = Number(req.params.groupId);
      const { leadId } = CreateGroupLeadRequestScheam.parse(req.body);

      const group = await this.groupsRepository.addLead(groupId, leadId);
      // await prisma.group.update({
      //   where: { id: groupId },
      //   data: {
      //     leads: {
      //       connect: {
      //         id: leadId,
      //       },
      //     },
      //   },
      // });

      res.status(201).json(group);
    } catch (error) {
      next(error);
    }
  };

  removeLead: Handler = async (req, res, next) => {
    try {
      const groupId = Number(req.params.groupId);
      const leadId = Number(req.params.leadId);

      const group = await this.groupsRepository.removeLead(groupId, leadId);
      // await prisma.group.update({
      //   where: { id: groupId },
      //   data: {
      //     leads: {
      //       disconnect: {
      //         id: leadId,
      //       },
      //     },
      //   },
      // });

      res.json(group);
    } catch (error) {
      next(error);
    }
  };
}
