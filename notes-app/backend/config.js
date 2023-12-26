// dbConfig.js
const { MongoClient } = require('mongodb');

const mongoURI = 'mongodb+srv://rishik:sagpenty@cluster0.opou9wy.mongodb.net/?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
    const client = new MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db();
        return db;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

module.exports = { connectToMongoDB };
