import { ObjectId } from "mongodb";
import dbclient from "../config/dbclient.js";

class AllModels {

    async getAll() {
        const db = await dbclient.connect();
        return await db.collection('experiencia').find().toArray();
    }
}

export default new AllModels();
