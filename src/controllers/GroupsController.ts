import { Handler } from "express";
import { CreateGroupRequestSchema, UpdateGroupRequestSchema } from "./schemas/GroupRequestSchema";
import { GroupsService } from "../services/GroupsService";

export class GroupController {
  constructor(private readonly groupsService: GroupsService) {}

  index: Handler = async (req, res, next) => {
    try {
      const groups = await this.groupsService.getAllGroups();
      res.json(groups);
    } catch (error) {
      next(error);
    }
  };

  show: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const group = await this.groupsService.getGroupById(id);
      res.json(group);
    } catch (error) {
      next(error);
    }
  };

  create: Handler = async (req, res, next) => {
    try {
      const data = CreateGroupRequestSchema.parse(req.body);
      const newGroup = await this.groupsService.createGroup(data);
      res.status(201).json({ newGroup });
    } catch (error) {
      next(error);
    }
  };

  update: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const data = UpdateGroupRequestSchema.parse(req.body);
      const updatedGroup = await this.groupsService.updateGroupById(id, data);
      res.json({ updatedGroup });
    } catch (error) {
      next(error);
    }
  };

  delete: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const deletedGroup = await this.groupsService.deleteGroupById(id);
      res.json({ deletedGroup });
    } catch (error) {
      next(error);
    }
  };
}
