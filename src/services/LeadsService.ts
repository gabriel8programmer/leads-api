import { HttpError } from "../errors/HttpError";
import { CampaignLeadStatus } from "../repositories/CampaignsRepository";
import {
  CreateLeadParams,
  LeadsRepository,
  LeadStatus,
  LeadWhereParams,
} from "../repositories/LeadsRepository";

interface LeadsPaginatedParams {
  page?: number;
  pageSize?: number;
  name?: string;
  status?: LeadStatus | CampaignLeadStatus;
  sortBy?: "name" | "status" | "createdAt";
  order?: "asc" | "desc";
}

export class LeadsService {
  constructor(private readonly leadsRepository: LeadsRepository) {}

  async getAllLeadsPaginated(params: {
    paginateParams: LeadsPaginatedParams;
    filter?: Pick<LeadWhereParams, "campaignId" | "groupId" | "campaignStatus">;
    include?: {
      groups?: boolean;
      campaigns?: boolean;
    };
  }) {
    const {
      page = 1,
      pageSize = 10,
      name,
      status,
      sortBy = "name",
      order = "asc",
    } = params.paginateParams;

    const limit = pageSize;
    const offset = (page - 1) * limit;

    const where: LeadWhereParams = { ...params.filter };

    if (name) where.name = { like: name, mode: "insensitive" };
    if (status) where.status = status as LeadStatus;

    const leads = await this.leadsRepository.find({
      where,
      sortBy,
      order,
      limit,
      offset,
      include: params.include,
    });

    const total = await this.leadsRepository.count(where);

    return {
      leads,
      meta: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      },
    };
  }

  async createLead(params: CreateLeadParams) {
    if (!params.status) params.status = "New";
    return this.leadsRepository.create(params);
  }

  async getLeadById(id: number) {
    const lead = await this.leadsRepository.findById(id);
    if (!lead) throw new HttpError(404, "Lead not found!");
    return { lead };
  }

  async updateLeadById(id: number, params: Partial<CreateLeadParams>) {
    const lead = await this.leadsRepository.findById(id);
    if (!lead) throw new HttpError(404, "Lead not found!");

    // Verifica se o lead já foi devidamente contatado
    if (params.status && lead.status === "New" && params.status !== "Contacted") {
      throw new HttpError(
        400,
        "um novo lead deve ser contatado antes de ter seu status atualizado para outros valores"
      );
    }

    // Valida a inatividade nesse lead em casa de arquivamente
    if (params.status === "Archived") {
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - lead.updatedAt.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays < 180)
        throw new HttpError(400, "um lead só pode ser arquivado após 6 meses de inatividade");
    }
    const updatedLead = await this.leadsRepository.updateById(id, params);
    return { updatedLead };
  }

  async deleteLeadById(id: number) {
    const lead = await this.leadsRepository.findById(id);
    if (!lead) throw new HttpError(404, "Lead not found!");
    const deletedLead = await this.leadsRepository.deleteById(id);

    return { deletedLead };
  }
}
