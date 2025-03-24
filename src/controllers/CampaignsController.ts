import { Handler } from "express";
import { HttpError } from "../errors/HttpError";
import {
  CreateCampaingRequestSchema,
  UpdateCampaingRequestSchema,
} from "./schemas/CampaignRequestSchema";
import { CampaignsRepository } from "../repositories/CampaignsRepository";

export class CampaignController {
  constructor(private readonly campaignsRepository: CampaignsRepository) {}

  index: Handler = async (req, res, next) => {
    try {
      const campaings = await this.campaignsRepository.find();
      res.json(campaings);
    } catch (error) {
      next(error);
    }
  };

  show: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id);

      const campaing = await this.campaignsRepository.findById(id);
      if (!campaing) throw new HttpError(404, "Campaing not found!");

      res.json(campaing);
    } catch (error) {
      next(error);
    }
  };

  create: Handler = async (req, res, next) => {
    try {
      const data = CreateCampaingRequestSchema.parse(req.body);
      const newCampaing = await this.campaignsRepository.create(data);
      res.status(201).json(newCampaing);
    } catch (error) {
      next(error);
    }
  };

  update: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const data = UpdateCampaingRequestSchema.parse(req.body);

      const updatedCampaing = await this.campaignsRepository.updateById(id, data);
      if (!updatedCampaing) throw new HttpError(404, "Campaing not found!");

      res.json({ updatedCampaing });
    } catch (error) {
      next(error);
    }
  };

  delete: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const deletedCampaing = await this.campaignsRepository.deleteById(id);
      if (!deletedCampaing) throw new HttpError(404, "Campaing not found!");

      res.json({ deletedCampaing });
    } catch (error) {
      next(error);
    }
  };
}
