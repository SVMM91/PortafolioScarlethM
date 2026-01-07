import AllModels from '../models/AllModels.js';

class AllController {
  constructor() {}

  async getAll(req, res) {
    try {
      const data = await AllModels.getAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


}

export default new AllController();
