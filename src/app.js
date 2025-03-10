import dotenv from 'dotenv';
import { resolve } from 'path';

import './database';

import express from 'express';
import cors from 'cors';
// import helmet from 'helmet'; DEIXAR COMENTADO POIS NÃO ESTOU UTILIZANDO HTTPS, ESTOU SEM DOMÍNIO

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

dotenv.config();

const whiteList = [
  'http://35.198.12.207:81',
  'http://localhost:4444',
  'https://www.wikipedia.org',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    // this.app.use(helmet()); DEIXAR COMENTADO POIS NÃO ESTOU UTILIZANDO HTTPS, ESTOU SEM DOMÍNIO
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
