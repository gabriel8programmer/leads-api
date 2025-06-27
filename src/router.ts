import { Router } from 'express'
import {
  campaignController,
  campaignLeadsController,
  groupController,
  groupLeadsController,
  leadsController,
} from './container'

const router = Router()

// lead's routes
router.get('/leads', leadsController.index)
router.post('/leads', leadsController.create)
router.get('/leads/:id', leadsController.show)
router.put('/leads/:id', leadsController.update)
router.delete('/leads/:id', leadsController.delete)

// group's routes
router.get('/groups', groupController.index)
router.post('/groups', groupController.create)
router.get('/groups/:id', groupController.show)
router.put('/groups/:id', groupController.update)
router.delete('/groups/:id', groupController.delete)

// group's leads routes
router.get('/groups/:groupId/leads', groupLeadsController.getLeads)
router.post('/groups/:groupId/leads', groupLeadsController.addLead)
router.delete('/groups/:groupId/leads/:leadId', groupLeadsController.removeLead)

// campaing's routes
router.get('/campaigns', campaignController.index)
router.post('/campaigns', campaignController.create)
router.get('/campaigns/:id', campaignController.show)
router.put('/campaigns/:id', campaignController.update)
router.delete('/campaigns/:id', campaignController.delete)

// Campaign's leads routes
router.get('/campaigns/:campaignId/leads', campaignLeadsController.getLeads)
router.post('/campaigns/:campaignId/leads', campaignLeadsController.addLead)
router.put('/campaigns/:campaignId/leads/:leadId', campaignLeadsController.udpateLeadStatus)
router.delete('/campaigns/:campaignId/leads/:leadId', campaignLeadsController.removeLead)

export default router
