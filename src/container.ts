import { LeadsController } from "./controllers/LeadsController";
import { GroupController } from "./controllers/GroupsController";
import { CampaignController } from "./controllers/CampaignsController";
import { CampaignLeadsController } from "./controllers/CampaignLeadsController";
import { GroupLeadsController } from "./controllers/GroupLeadsController";
import { PrismaLeadsRepository } from "./repositories/prisma/PrismaLeadsRepository";
import { PrismaGroupsRepository } from "./repositories/prisma/PrismaGroupsRepository";
import { PrismaCampaignsRepository } from "./repositories/prisma/PrismaCampaignsRepository";
import { LeadsService } from "./services/LeadsService";
import { GroupsService } from "./services/GroupsService";

// instance repositories
export const leadsRepository = new PrismaLeadsRepository();
export const groupsRepository = new PrismaGroupsRepository();
export const campaignsRepository = new PrismaCampaignsRepository();

// instance services
export const leadsService = new LeadsService(leadsRepository);
export const groupsService = new GroupsService(groupsRepository);

// instance controllers
export const leadsController = new LeadsController(leadsService);
export const groupController = new GroupController(groupsService);
export const groupLeadsController = new GroupLeadsController(groupsRepository, leadsRepository);
export const campaignController = new CampaignController(campaignsRepository);
export const campaignLeadsController = new CampaignLeadsController(
  campaignsRepository,
  leadsRepository
);
