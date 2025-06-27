import { HttpError } from '../errors/HttpError'
import { CreateGroupParams, GroupsRepository } from '../repositories/GroupsRepository'
import { LeadsService } from './LeadsService'

export class GroupsService {
  constructor(
    private readonly groupsRepository: GroupsRepository,
    private readonly leadServices: LeadsService,
  ) {}

  async getAllGroups() {
    return this.groupsRepository.find()
  }

  async createGroup(params: CreateGroupParams) {
    return this.groupsRepository.create(params)
  }

  async validateGroupById(id: number) {
    const group = await this.groupsRepository.findById(id)
    if (!group) throw new HttpError(404, 'Group not found!')
    return group
  }

  async getGroupById(id: number) {
    const group = this.validateGroupById(id)
    return group
  }

  async updateGroupById(id: number, params: Partial<CreateGroupParams>) {
    const updatedGroup = await this.groupsRepository.updateById(id, params)
    if (!updatedGroup) throw new HttpError(404, 'Group not found!')
    return updatedGroup
  }

  async deleteGroupById(id: number) {
    const deletedGroup = await this.groupsRepository.deleteById(id)
    if (!deletedGroup) throw new HttpError(404, 'Group not found!')
    return deletedGroup
  }

  async addLead(groupId: number, leadId: number) {
    //validate group
    await this.validateGroupById(groupId)

    //validate lead
    await this.leadServices.validateLeadById(leadId)

    return this.groupsRepository.addLead(groupId, leadId)
  }

  async removeLead(groupId: number, leadId: number) {
    //validate group
    await this.validateGroupById(groupId)

    //validate lead
    await this.leadServices.validateLeadById(leadId)

    return this.groupsRepository.removeLead(groupId, leadId)
  }
}
