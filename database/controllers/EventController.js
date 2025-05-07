class EventController {
    constructor(eventModel) {
      this.eventModel = eventModel;
    }
  
    async getAllEvents(req, res) {
      try {
        const events = await this.eventModel.findAll();
        if (!events || events.length === 0) {
          return res.status(404).json({ message: 'No events found' });
        }
        res.json(events);
      } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
      }
    }
  
    async getEventsByUser(req, res) {
      try {
        const { user } = req.params;
        const event = await this.eventModel.findByUser(user);
        if (!event) {
          return res.status(404).json({ message: 'Event not found' });
        }
        res.json(event);
      } catch (event) {
        res.status(500).json({ message: 'Server error', error: error.message });
      }
    }
  
    async getEventsByDates(req, res) {
      try {
        const { dates } = req.query;
        
        if (!dates) {
          return res.status(400).json({ message: 'Dates parameter is required' });
        }
        const datesArray = Array.isArray(dates) ? dates : dates.split(',');
        const events = await this.eventModel.findByDates(datesArray);
        if (!events || events.length === 0) {
          return res.status(404).json({ message: 'No events found with the specified date' });
        }
        res.json(events);
      } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
      }
    }
  
    async createEvent(req, res) {
      try {
        const eventData = req.body;
        
        if (!dateData.date || !dateData.user) {
          return res.status(400).json({ message: 'Date and user are required fields' });
        }
        
        const existingEvent = await this.eventModel.findByDate(eventData.date);
        if (existingEvent) {
          return res.status(400).json({ message: 'Event with this date already exists' });
        }
        
        const newEvent = await this.eventModel.create(eventData);
        res.status(201).json(newEvent);
      } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
      }
    }
  
    async updateEvent(req, res) {
      try {
        const { user } = req.params;
        const updates = req.body;
        
        const updatedEvent = await this.eventModel.update(user, updates);
        
        if (!updatedEvent) {
          return res.status(404).json({ message: 'Event not found' });
        }
        
        res.json(updatedEvent);
      } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
      }
    }
  
    async deleteEvent(req, res) {
      try {
        const { user } = req.params;
        const result = await this.eventModel.delete(user);
        
        if (!result) {
          return res.status(404).json({ message: 'Coach not found' });
        }
        
        res.json({ message: 'Event deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
      }
    }
  }
  
  export default EventController;
  