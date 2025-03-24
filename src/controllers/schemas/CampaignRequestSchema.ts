import { z } from "zod";

export const CreateCampaingRequestSchema = z.object({
  name: z.string(),
  description: z.string(),
  startDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
});

export const UpdateCampaingRequestSchema = CreateCampaingRequestSchema.pick({
  name: true,
  description: true,
  startDate: true,
  endDate: true,
}).partial();

const CampaignLeadStatusSchema = z.enum([
  "New",
  "Engaged",
  "FollowUp_Scheduled",
  "Contacted",
  "Qualified",
  "Converted",
  "Unresponsive",
  "Disqualified",
  "Re_Engaged",
  "Opted_Out",
]);

export const GetCampaignLeadsRequestSchema = z.object({
  page: z.string().optional(),
  pageSize: z.string().optional(),
  name: z.string().optional(),
  status: CampaignLeadStatusSchema.optional(),
  sortBy: z.enum(["name", "status"]).optional(),
  order: z.enum(["asc", "desc"]).optional(),
});

export const CreateCampaignLeadRequestSchema = z.object({
  leadId: z.coerce.number(),
  status: CampaignLeadStatusSchema.optional(),
});

export const UpdateCampaignLeadRequestSchema = z.object({
  status: CampaignLeadStatusSchema,
});
