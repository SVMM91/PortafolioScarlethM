import { ObjectId } from "mongodb";
import dbclient from "../config/dbclient.js";

class AllModels {
    async create(data) {
        const db = await dbclient.connect();
        const collection = db.collection("experiencia");
        return await collection.insertMany(data);
    }

    async getAll() {
        const db = await dbclient.connect();
        return await db.collection('experiencia').find().toArray();
    }

    async getOne(id) {
        const db = await dbclient.connect();
        return await db.collection('experiencia').findOne({
            _id: new ObjectId(id)
        });
    }

    async upDate(data) {
        const db = await dbclient.connect();
        return await db.collection('experiencia').updateMany(
            { $set: data }
        );
    }
    async deleteAll() {
        const db = await dbclient.connect();
        return await db.collection('experiencia').deleteMany({});
    }
}

export default new AllModels();
