import { HttpError } from "../errors/HttpError";
import { GroupsRepository } from "../repositories/GroupsRepository";

interface CreateGroupParams {
  name: string;
  description: string;
}

export class GroupsService {
  constructor(private readonly groupsRepository: GroupsRepository) {}

  async getAllGroups() {
    return this.groupsRepository.find();
  }

  async createGroup(params: CreateGroupParams) {
    return this.groupsRepository.create(params);
  }

  async getGroupById(id: number) {
    const group = await this.groupsRepository.findById(id);
    if (!group) throw new HttpError(404, "Group not found!");
    return group;
  }

  async updateGroupById(id: number, params: Partial<CreateGroupParams>) {
    const updatedGroup = await this.groupsRepository.updateById(id, params);
    if (!updatedGroup) throw new HttpError(404, "Group not found!");
    return updatedGroup;
  }

  async deleteGroupById(id: number) {
    const deletedGroup = await this.groupsRepository.deleteById(id);
    if (!deletedGroup) throw new HttpError(404, "Group not found!");
    return deletedGroup;
  }
}
