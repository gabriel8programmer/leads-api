import { Handler } from 'express'
import {
  CreateCampaingRequestSchema,
  UpdateCampaingRequestSchema,
} from './schemas/CampaignRequestSchema'
import { CampaignsService } from '../services/CampaignsService'

export class CampaignController {
  constructor(private readonly campaignsService: CampaignsService) {}

  index: Handler = async (req, res, next) => {
    try {
      const campaings = await this.campaignsService.getAllCampaigns()
      res.json(campaings)
    } catch (error) {
      next(error)
    }
  }

  show: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id)
      const campaign = await this.campaignsService.getCampaignById(id)
      res.json(campaign)
    } catch (error) {
      next(error)
    }
  }

  create: Handler = async (req, res, next) => {
    try {
      const data = CreateCampaingRequestSchema.parse(req.body)
      const campaign = await this.campaignsService.createCampaign(data)
      res.status(201).json({ campaign, message: 'Campaign created successfuly!' })
    } catch (error) {
      next(error)
    }
  }

  update: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id)
      const data = UpdateCampaingRequestSchema.parse(req.body)
      const campaign = await this.campaignsService.updateCampaignById(id, data)
      res.json({ campaign, message: 'Campaign updated successfuly!' })
    } catch (error) {
      next(error)
    }
  }

  delete: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id)
      const campaign = await this.campaignsService.deleteCampaignById(id)
      res.json({ campaign, message: 'Campaign deleted successfuly!' })
    } catch (error) {
      next(error)
    }
  }
}
