 import { ObjectId } from 'mongodb';

class Coach {
  constructor(db) {
    this.collection = db.collection('events');
  }

  async findAll() {
    return await this.collection.find({}).toArray();
  }

  async findByUser(user) {
    return await this.collection.findOne({ user: user.toLowerCase() });
  }

  async findById(id) {
    return await this.collection.findOne({ _id: new createFromHexString(id) });
  }

  async create(eventData) {
    const coach = {
      user: eventData.user.toLowerCase(),
      name: eventData.name,
      event: eventData.eventName,
      reoccuring: eventData.reoccuring || false,
      colorID: eventData.colorID,
      createdAt: new Date().toLocaleDateString,
      updatedAt: new Date().toLocaleDateString
    };

    const result = await this.collection.insertOne(coach);
    return { ...coach, _id: result.insertedId };
  }

  async update(user, updates) {
    const updateDoc = {
      $set: {
        ...updates,
        updatedAt: new Date()
      }
    };

    const result = await this.collection.findOneAndUpdate(
      { user: user.toLowerCase() },
      updateDoc,
      { returnDocument: 'after' }
    );

    return result.value;
  }

  async delete(user) {
    const result = await this.collection.deleteOne({ user: user.toLowerCase() });
    return result.deletedCount > 0;
  }

  async findByDates(dates) {
    return await this.collection.find({
      dates: { $in: dates }
    }).toArray();
  }
}

export default Coach;
