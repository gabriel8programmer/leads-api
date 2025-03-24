import { z } from "zod";

export const LeadStatusSchema = z.enum([
  "New",
  "Contacted",
  "Qualified",
  "Converted",
  "Unresponsive",
  "Disqualified",
  "Archived",
]);

export const GetLeadsRequestSchema = z.object({
  page: z.string().optional(),
  pageSize: z.string().optional(),
  name: z.string().optional(),
  status: LeadStatusSchema.optional(),
  sortBy: z.enum(["name", "status"]).optional(),
  order: z.enum(["asc", "desc"]).optional(),
});

export const CreateLeadRequestSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  status: LeadStatusSchema.optional(),
});

export const UpdateLeadRequestSchema = CreateLeadRequestSchema.pick({
  name: true,
  email: true,
  phone: true,
  status: true,
}).partial();
