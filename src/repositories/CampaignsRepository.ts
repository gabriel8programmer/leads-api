import { Campaign, CampaignLead } from "@prisma/client";

export type CampaignLeadStatus =
  | "New"
  | "Engaged"
  | "FollowUp_Scheduled"
  | "Contacted"
  | "Qualified"
  | "Converted"
  | "Unresponsive"
  | "Disqualified"
  | "Re_Engaged"
  | "Opted_Out";

export interface CreateCampaignLeadParams {
  campaignId: number;
  leadId: number;
  status?: CampaignLeadStatus;
}

export interface CreateCampaignParams {
  name: string;
  description: string;
  startDate?: Date;
  endDate?: Date;
}

export interface CampaignsRepository {
  find: () => Promise<Campaign[]>;
  findById: (id: number) => Promise<Campaign | null>;
  create: (params: CreateCampaignParams) => Promise<Campaign>;
  updateById: (id: number, params: Partial<CreateCampaignParams>) => Promise<Campaign | null>;
  deleteById: (id: number) => Promise<Campaign | null>;
  addLead: (params: CreateCampaignLeadParams) => Promise<CampaignLead>;
  removeLead: (campaignId: number, leadId: number) => Promise<CampaignLead>;
  updateLeadStatus: (
    campaignId: number,
    leadId: number,
    status: CampaignLeadStatus
  ) => Promise<CampaignLead>;
}
