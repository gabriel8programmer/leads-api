import { Handler } from "express";
import {
  CreateCampaignLeadRequestSchema,
  GetCampaignLeadsRequestSchema,
  UpdateCampaignLeadRequestSchema,
} from "./schemas/CampaignRequestSchema";
import { CampaignsService } from "../services/CampaignsService";
import { LeadsService } from "../services/LeadsService";

export class CampaignLeadsController {
  constructor(
    private readonly campaignsService: CampaignsService,
    private readonly leadsService: LeadsService
  ) {}

  getLeads: Handler = async (req, res, next) => {
    try {
      const campaignId = Number(req.params.campaignId);
      const query = GetCampaignLeadsRequestSchema.parse(req.query);
      const { page = "1", pageSize = "10", name, status, sortBy, order } = query;

      const leads = await this.leadsService.getAllLeadsPaginated({
        paginateParams: { page: +page, pageSize: +pageSize, name, sortBy, order },
        filter: { campaignId, campaignStatus: status },
        include: { campaigns: true },
      });

      res.json(leads);
    } catch (error) {
      next(error);
    }
  };

  addLead: Handler = async (req, res, next) => {
    try {
      const campaignId = Number(req.params.campaignId);
      const { leadId } = CreateCampaignLeadRequestSchema.parse(req.body);
      const newCampaignLead = await this.campaignsService.addLead(campaignId, leadId);
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

      const updatedCampaignLead = await this.campaignsService.updateLeadStatus(
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
      const deletedCapaignLead = await this.campaignsService.removeLead(campaignId, leadId);
      res.json({ deletedCapaignLead });
    } catch (error) {
      next(error);
    }
  };
}
