import { Handler } from 'express'
import { CreateGroupRequestSchema, UpdateGroupRequestSchema } from './schemas/GroupRequestSchema'
import { GroupsService } from '../services/GroupsService'

export class GroupController {
  constructor(private readonly groupsService: GroupsService) {}

  index: Handler = async (req, res, next) => {
    try {
      const groups = await this.groupsService.getAllGroups()
      res.json(groups)
    } catch (error) {
      next(error)
    }
  }

  show: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id)
      const group = await this.groupsService.getGroupById(id)
      res.json(group)
    } catch (error) {
      next(error)
    }
  }

  create: Handler = async (req, res, next) => {
    try {
      const data = CreateGroupRequestSchema.parse(req.body)
      const group = await this.groupsService.createGroup(data)
      res.status(201).json({ group, message: 'Group created successfuly!' })
    } catch (error) {
      next(error)
    }
  }

  update: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id)
      const data = UpdateGroupRequestSchema.parse(req.body)
      const group = await this.groupsService.updateGroupById(id, data)
      res.json({ group, message: 'Group updated successfuly!' })
    } catch (error) {
      next(error)
    }
  }

  delete: Handler = async (req, res, next) => {
    try {
      const id = Number(req.params.id)
      const group = await this.groupsService.deleteGroupById(id)
      res.json({ group, message: 'Group deleted successfuly!' })
    } catch (error) {
      next(error)
    }
  }
}
