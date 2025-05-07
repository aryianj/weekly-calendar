
import { Router } from 'express';
const router = Router();
import EventController from '../controllers/EventController';
import Event from '../models/EventModel';
import { getClient } from '../config/db';

const db = getClient().db('calendar-items');
const eventModel = new Event(db);
const eventController = new EventController(eventModel);

// Get all events
router.get('/', (req, res) => {
  // Check if attributes query parameter exists
  if (req.query.dates) {
    return eventController.getEventsByDates(req, res);
  }
  
  return eventController.getAllEvents(req, res);
});

router.get('/:user', (req, res) => {
  return eventController.getEventsByUser(req, res);
});

router.post('/', (req, res) => {
  return eventController.createEvent(req, res);
});

router.put('/:user', (req, res) => {
  return eventController.updateEvent(req, res);
});

router.delete('/:user', (req, res) => {
  return eventController.deleteEvent(req, res);
});

export default router;
