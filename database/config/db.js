import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
let db;

async function connect() {
  try {
        await client.connect();
        console.log('Successfully connected to MongoDB');
        db = client.db('calendar-items')
        return db;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
}
function getDb() {
    return db;
}

function getClient() {
    return client;
}

module.exports = {
    connect,
    getDb,
    getClient
};


run().catch(console.dir);
//    const database = client.db('calendar-items');    const events = database.collection('events');

