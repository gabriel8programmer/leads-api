import { Handler } from "express";
import { HttpError } from "../errors/HttpError";
import { CreateGroupRequestSchema, UpdateGroupRequestSchema } from "./schemas/GroupRequestSchema";
import { GroupsRepository } from "../repositories/GroupsRepository";

export class GroupController {
  // private groupsRepository: GroupsRepository;

  // constructor(groupRepository: GroupsRepository) {
  //   this.groupsRepository = groupRepository;
  // }

  constructor(private readonly groupsRepository: GroupsRepository) {}

  index: Handler = async (req, res, next) => {
    try {
      const groups = await this.groupsRepository.find();
      // const groups = await prisma.group.findMany();
      res.json(groups);
    } catch (error) {
      next(error);
    }
  };

  show: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id);

      const group = await this.groupsRepository.findById(id);
      // const group = await prisma.group.findUnique({ where: { id }, include: { leads: true } });

      if (!group) throw new HttpError(404, "Group not found!");

      res.json(group);
    } catch (error) {
      next(error);
    }
  };

  create: Handler = async (req, res, next) => {
    try {
      const data = CreateGroupRequestSchema.parse(req.body);

      const newGroup = await this.groupsRepository.create(data);
      // const newGroup = await prisma.group.create({ data });

      res.status(201).json(newGroup);
    } catch (error) {
      next(error);
    }
  };

  update: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const data = UpdateGroupRequestSchema.parse(req.body);

      const updatedGroup = await this.groupsRepository.updateById(id, data);
      // const updatedGroup = await prisma.group.update({ where: { id }, data });
      if (!updatedGroup) throw new HttpError(404, "Group not found!");

      res.json({ updatedGroup });
    } catch (error) {
      next(error);
    }
  };

  delete: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id);

      const deletedGroup = await this.groupsRepository.deleteById(id);
      // const deletedGroup = await prisma.group.delete({ where: { id } });
      if (!deletedGroup) throw new HttpError(404, "Group not found!");

      res.json({ deletedGroup });
    } catch (error) {
      next(error);
    }
  };
}
