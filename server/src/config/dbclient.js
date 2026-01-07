import { MongoClient } from "mongodb";
import 'dotenv/config';

class DBClient {
    constructor() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?appName=experiencia`;
        this.client = new MongoClient(queryString);
        this.db = null;
    }

    async connect() {
        if (!this.db) {
            await this.client.connect();
            this.db = this.client.db('experiencia');
            console.log('Conectado al serv db');
        }
        return this.db;
    }
    
}

export default new DBClient();
