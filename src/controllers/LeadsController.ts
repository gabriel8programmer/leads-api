import { Handler } from 'express'
import {
  CreateLeadRequestSchema,
  GetLeadsRequestSchema,
  UpdateLeadRequestSchema,
} from './schemas/LeadRequestSchema'
import { LeadsService } from '../services/LeadsService'

export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  index: Handler = async (req, res, next) => {
    try {
      const query = GetLeadsRequestSchema.parse(req.query)
      const { page = '1', pageSize = '10' } = query

      const leads = await this.leadsService.getAllLeadsPaginated({
        paginateParams: { ...query, page: +page, pageSize: +pageSize },
      })

      res.json(leads)
    } catch (error) {
      next(error)
    }
  }

  create: Handler = async (req, res, next) => {
    try {
      const body = CreateLeadRequestSchema.parse(req.body)
      const lead = await this.leadsService.createLead(body)
      res.status(201).json({ lead, message: 'Lead created successfuly!' })
    } catch (error) {
      next(error)
    }
  }

  show: Handler = async (req, res, next) => {
    try {
      const lead = await this.leadsService.getLeadById(+req.params.id)
      res.json(lead)
    } catch (error) {
      next(error)
    }
  }

  update: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id)
      const body = UpdateLeadRequestSchema.parse(req.body)
      const lead = await this.leadsService.updateLeadById(id, body)
      res.json({ lead, message: 'Lead updated successfuly!' })
    } catch (error) {
      next(error)
    }
  }

  delete: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id)
      const lead = await this.leadsService.deleteLeadById(id)
      res.json({ lead, message: 'Lead deleted successfuly!' })
    } catch (error) {
      next(error)
    }
  }
}
