import { Campaign, CampaignLead } from "@prisma/client";
import {
  CampaignLeadStatus,
  CampaignsRepository,
  CreateCampaignLeadParams,
  CreateCampaignParams,
} from "../CampaignsRepository";
import prisma from "../../database";

export class PrismaCampaignsRepository implements CampaignsRepository {
  async find(): Promise<Campaign[]> {
    return prisma.campaign.findMany();
  }

  async findById(id: number): Promise<Campaign | null> {
    return prisma.campaign.findUnique({
      where: { id },
      include: {
        leads: {
          include: {
            lead: true,
          },
        },
      },
    });
  }

  async create(params: CreateCampaignParams): Promise<Campaign> {
    return prisma.campaign.create({ data: params });
  }

  async updateById(id: number, params: Partial<CreateCampaignParams>): Promise<Campaign | null> {
    return prisma.campaign.update({ where: { id }, data: params });
  }

  async deleteById(id: number): Promise<Campaign | null> {
    return prisma.campaign.delete({ where: { id } });
  }

  async addLead(params: CreateCampaignLeadParams): Promise<CampaignLead> {
    return prisma.campaignLead.create({ data: params });
  }

  async removeLead(campaignId: number, leadId: number): Promise<CampaignLead> {
    return prisma.campaignLead.delete({ where: { campaignId_leadId: { campaignId, leadId } } });
  }

  async updateLeadStatus(
    campaignId: number,
    leadId: number,
    status: CampaignLeadStatus
  ): Promise<CampaignLead> {
    return prisma.campaignLead.update({
      where: {
        campaignId_leadId: {
          campaignId,
          leadId,
        },
      },
      data: {
        status,
      },
    });
  }
}
