import { Lead } from "@prisma/client";
import { CampaignLeadStatus } from "./CampaignsRepository";

export type LeadStatus =
  | "New"
  | "Contacted"
  | "Qualified"
  | "Converted"
  | "Unresponsive"
  | "Disqualified"
  | "Archived";

export interface LeadWhereParams {
  name?: {
    like?: string;
    equals?: string;
    mode?: "default" | "insensitive";
  };
  status?: LeadStatus;
  groupId?: number;
  campaignId?: number;
  campaignLeadStatus?: CampaignLeadStatus;
}

export interface FindLeadsParams {
  where?: LeadWhereParams;
  sortBy?: "name" | "status" | "createdAt";
  order?: "asc" | "desc";
  limit?: number;
  offset?: number;
  include?: {
    groups?: boolean;
    campaigns?: boolean;
  };
}

export interface CreateLeadParams {
  name: string;
  email: string;
  phone: string;
  status?: LeadStatus;
}

export interface LeadsRepository {
  find: (params: FindLeadsParams) => Promise<Lead[]>;
  findById: (id: number) => Promise<Lead | null>;
  create: (params: CreateLeadParams) => Promise<Lead>;
  count: (where: LeadWhereParams) => Promise<number>;
  updateById: (id: number, params: Partial<CreateLeadParams>) => Promise<Lead | null>;
  deleteById: (id: number) => Promise<Lead | null>;
}
