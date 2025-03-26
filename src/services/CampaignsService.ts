import { HttpError } from "../errors/HttpError";
import {
  CampaignLeadStatus,
  CampaignsRepository,
  CreateCampaignParams,
} from "../repositories/CampaignsRepository";

export class CampaignsService {
  constructor(private readonly campaignsRepository: CampaignsRepository) {}

  async getAllCampaigns() {
    return this.campaignsRepository.find();
  }

  async getCampaignById(id: number) {
    const campaing = await this.campaignsRepository.findById(id);
    if (!campaing) throw new HttpError(404, "Campaing not found!");
    return campaing;
  }

  async createCampaign(params: CreateCampaignParams) {
    return this.campaignsRepository.create(params);
  }

  async updateCampaignById(id: number, params: Partial<CreateCampaignParams>) {
    const updatedCampaing = await this.campaignsRepository.updateById(id, params);
    if (!updatedCampaing) throw new HttpError(404, "Campaing not found!");
    return updatedCampaing;
  }

  async deleteCampaignById(id: number) {
    const deletedCampaing = await this.campaignsRepository.deleteById(id);
    if (!deletedCampaing) throw new HttpError(404, "Campaing not found!");
    return deletedCampaing;
  }

  async addLead(campaignId: number, leadId: number) {
    return this.campaignsRepository.addLead({ campaignId, leadId });
  }

  async removeLead(campaignId: number, leadId: number) {
    return this.campaignsRepository.removeLead(campaignId, leadId);
  }

  async updateLeadStatus(campaignId: number, leadId: number, status: CampaignLeadStatus) {
    return this.campaignsRepository.updateLeadStatus(campaignId, leadId, status);
  }
}
