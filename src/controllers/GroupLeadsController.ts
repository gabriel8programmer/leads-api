import { Handler } from 'express'
import { GetLeadsRequestSchema } from './schemas/LeadRequestSchema'
import { CreateGroupLeadRequestScheam } from './schemas/GroupRequestSchema'
import { GroupsService } from '../services/GroupsService'
import { LeadsService } from '../services/LeadsService'

export class GroupLeadsController {
  constructor(
    private readonly groupsService: GroupsService,
    private readonly leadsService: LeadsService,
  ) {}

  getLeads: Handler = async (req, res, next) => {
    try {
      const groupId = Number(req.params.groupId)
      const query = GetLeadsRequestSchema.parse(req.query)
      const { page = '1', pageSize = '10' } = query

      const leads = await this.leadsService.getAllLeadsPaginated({
        paginateParams: { ...query, page: +page, pageSize: +pageSize },
        filter: { groupId },
        include: { groups: true },
      })

      res.json(leads)
    } catch (error) {
      next(error)
    }
  }

  addLead: Handler = async (req, res, next) => {
    try {
      const groupId = Number(req.params.groupId)
      const { leadId } = CreateGroupLeadRequestScheam.parse(req.body)
      const lead = await this.groupsService.addLead(groupId, leadId)
      res.status(201).json({ lead, message: 'Lead saved in group successfuly!' })
    } catch (error) {
      next(error)
    }
  }

  removeLead: Handler = async (req, res, next) => {
    try {
      const groupId = Number(req.params.groupId)
      const leadId = Number(req.params.leadId)
      const lead = await this.groupsService.removeLead(groupId, leadId)
      res.json({ lead, message: 'Lead removed from group successfuly!' })
    } catch (error) {
      next(error)
    }
  }
}
