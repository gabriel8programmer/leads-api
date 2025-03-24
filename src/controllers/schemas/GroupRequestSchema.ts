import { z } from "zod";

export const CreateGroupRequestSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const UpdateGroupRequestSchema = CreateGroupRequestSchema.pick({
  name: true,
  description: true,
}).partial();

export const CreateGroupLeadRequestScheam = z.object({
  leadId: z.coerce.number(),
});
