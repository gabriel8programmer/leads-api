import { Group, Lead } from '@prisma/client'

export interface CreateGroupParams {
  name: string
  description: string
}

export interface GroupsRepository {
  find: () => Promise<Group[]>
  findById: (id: number) => Promise<Group | null>
  create: (params: CreateGroupParams) => Promise<Group>
  updateById: (id: number, params: Partial<CreateGroupParams>) => Promise<Group | null>
  deleteById: (id: number) => Promise<Group | null>
  addLead: (groupId: number, leadId: number) => Promise<Lead | null>
  removeLead: (groupId: number, leadId: number) => Promise<Lead | null>
}
