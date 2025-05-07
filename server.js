import express, { json } from 'express';
import session from 'express-session';
import cors from 'cors';
import { connect, getClient } from './config/db';
import eventRoutes from './database/routes/EventRoutes';
import { create } from 'connect-mongo';

const app = express();
const port = process.env.PORT || 3000;

connect().catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
});

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: create({
        mongoUrl: process.env.MONGODB_URI, 
        ttl: 24 * 60 * 60 
    })
}));

app.use(json());

app.use('/api/events', eventRoutes);

process.on('SIGINT', async () => {
    console.log("Shutting down...");
    await getClient().close();
    process.exit();
});


app.listen(port, () => {
    console.log(`Node server running on port ${port}`);
});