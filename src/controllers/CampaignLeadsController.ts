import { Handler } from "express";
import {
  CreateCampaignLeadRequestSchema,
  GetCampaignLeadsRequestSchema,
  UpdateCampaignLeadRequestSchema,
} from "./schemas/CampaignRequestSchema";
import { CampaignsRepository } from "../repositories/CampaignsRepository";
import { LeadsRepository, LeadWhereParams } from "../repositories/LeadsRepository";

export class CampaignLeadsController {
  constructor(
    private readonly campaignsRepository: CampaignsRepository,
    private readonly leadsRepository: LeadsRepository
  ) {}

  getLeads: Handler = async (req, res, next) => {
    try {
      const campaignId = Number(req.params.campaignId);
      const query = GetCampaignLeadsRequestSchema.parse(req.query);
      const { page = "1", pageSize = "10", name, status, sortBy = "name", order = "asc" } = query;

      const limit = Number(pageSize);
      const offset = (Number(page) - 1) * limit;

      const where: LeadWhereParams = { campaignId };

      if (name) where.name = { like: name, mode: "insensitive" };
      if (status) where.campaignLeadStatus = status;

      const leads = await this.leadsRepository.find({
        where,
        sortBy,
        order,
        limit,
        offset,
        include: {
          campaigns: true,
        },
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
      const campaignId = Number(req.params.campaignId);
      const data = CreateCampaignLeadRequestSchema.parse(req.body);
      const newCampaignLead = await this.campaignsRepository.addLead({ ...data, campaignId });
      res.json({ newCampaignLead });
    } catch (error) {
      next(error);
    }
  };

  udpateLeadStatus: Handler = async (req, res, next) => {
    try {
      const campaignId = Number(req.params.campaignId);
      const leadId = Number(req.params.leadId);

      const { status } = UpdateCampaignLeadRequestSchema.parse(req.body);

      const updatedCampaignLead = await this.campaignsRepository.updateLeadStatus(
        campaignId,
        leadId,
        status
      );

      res.json({ updatedCampaignLead });
    } catch (error) {
      next(error);
    }
  };

  removeLead: Handler = async (req, res, next) => {
    try {
      const campaignId = Number(req.params.campaignId);
      const leadId = Number(req.params.leadId);

      const deletedCapaignLead = await this.campaignsRepository.removeLead(campaignId, leadId);

      res.json({ deletedCapaignLead });
    } catch (error) {
      next(error);
    }
  };
}
