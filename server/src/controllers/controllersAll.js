import AllModels from '../models/AllModels.js';

class AllController {
  constructor() {}
  //request = solicitud petición  - respond = una variable que nos permite responder
  async create(req, res) {
    console.log("¡Llegué al controlador!");
    try {
      const data = await AllModels.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      console.error("EL ERROR ES ESTE:", error);
      res.status(500).send(error.message);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      console.log("ID recibido:", id);

      const data = await AllModels.getOne(id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async getAll(req, res) {
    try {
      const data = await AllModels.getAll();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
  async upDate(req, res) {
    try {
        const {...data } = req.body; 
        const result = await AllModels.upDate(data);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  }
  async deleteAll(req, res) {
    try {
      const result = await AllModels.deleteAll();
      res.status(200).json({
        message: "Todos los documentos fueron eliminados",
        deletedCount: result.deletedCount
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default new AllController();
