import { ObjectId } from 'mongodb';
import dbclient from '../config/dbclient.js';

class AllModels {
  async getAll() {
    const db = await dbclient.connect();
    return await db.collection('experiencia').find().toArray();
  }

  async getOne(id) {
    const db = await dbclient.connect();
    return await db.collection('experiencia').findOne({ _id: new ObjectId(id) });
  }

  async create(data) {
    const db = await dbclient.connect();
    if (Array.isArray(data)) {
      return await db.collection('experiencia').insertMany(data);
    } else {
      return await db.collection('experiencia').insertOne(data);
    }
  }

  async upDate(id, data) {
    const db = await dbclient.connect();
    return await db.collection('experiencia').updateOne(
      { _id: new ObjectId(id) },
      { $set: data }
    );
  }

  async deleteAll() {
    const db = await dbclient.connect();
    return await db.collection('experiencia').deleteMany({});
  }
}

export default new AllModels();
