import AllModels from '../models/AllModels.js';
import { ObjectId } from 'mongodb';

class AllController {
  async getAll(req, res) {
    try {
      const data = await AllModels.getAll();
      res.status(200).json(data); // Devuelve todos los documentos
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'ID inválido' });
      }
      const data = await AllModels.getOne(id);
      if (!data) return res.status(404).json({ message: 'Documento no encontrado' });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    try {
      const data = await AllModels.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async upDate(req, res) {
    try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) return res.status(400).json({ message: 'ID inválido' });
      const result = await AllModels.upDate(id, req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteAll(req, res) {
    try {
      const result = await AllModels.deleteAll();
      res.status(200).json({
        message: 'Todos los documentos fueron eliminados',
        deletedCount: result.deletedCount
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new AllController();
