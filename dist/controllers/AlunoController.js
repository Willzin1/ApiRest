"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
  async index(req, res) {
    const alunos = await _Aluno2.default.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
      include: {
        model: _Foto2.default,
        attributes: ['urlImage', 'filename', 'originalname'],
      },
    });
    return res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await _Aluno2.default.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({
          errors: ['ID não encontrado.'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);

      if (!aluno) {
        res.status(400).json({
          errors: ['Aluno não encontrado.'],
        });
      }

      await aluno.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      console.log(id);

      if (!id) {
        res.status(400).json({
          errors: ['ID não encontrado.'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['urlImage', 'filename', 'originalname'],
        },
      });

      if (!aluno) {
        res.status(400).json({
          errors: ['Aluno não encontrado.'],
        });
      }

      const {
        nome, sobrenome, email, idade, peso, altura, Fotos,
      } = aluno;

      return res.json({
        nome, sobrenome, email, idade, peso, altura, Fotos,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({
          errors: ['ID não encontrado.'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);

      if (!aluno) {
        res.status(400).json({
          errors: ['Aluno não encontrado.'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);

      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new AlunoController();
