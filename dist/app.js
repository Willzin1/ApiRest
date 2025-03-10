"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
// import helmet from 'helmet'; DEIXAR COMENTADO POIS NÃO ESTOU UTILIZANDO HTTPS, ESTOU SEM DOMÍNIO

var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _fotoRoutes = require('./routes/fotoRoutes'); var _fotoRoutes2 = _interopRequireDefault(_fotoRoutes);

_dotenv2.default.config();

/**
 * DEIXAR COMENTADO POIS É NECESSÁRIO. SERÃO AS OPTIONS QUE IRÃO NO CORS, CASO SEJA NECESSÁRIO
 * "BLOQUEAR" ALGUNS DOMÍNIOS. Somente esses domínios da whiteList que poderão acessar a minha api.
 * Irei deixar comentado pois quero que qualquer domínio possa acessar essa api como forma de
 * aprendizado. Caso eu queira utilizar essas opções basta eu passar para dentro do cors.
 *
 * const whiteList = [
 *   'http://35.198.12.207:81',
 *   'http://localhost:4444',
 * ];
 * const corsOptions = {
 *  origin(origin, callback) {
 *    if (whiteList.indexOf(origin) !== -1 || !origin) {
 *      callback(null, true);
 *    } else {
 *      callback(new Error('Not allowed by CORS'));
 *    }
 *  },
 * };
 */

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, ));
    // this.app.use(helmet()); DEIXAR COMENTADO POIS NÃO ESTOU UTILIZANDO HTTPS, ESTOU SEM DOMÍNIO
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', _homeRoutes2.default);
    this.app.use('/users/', _userRoutes2.default);
    this.app.use('/tokens/', _tokenRoutes2.default);
    this.app.use('/alunos/', _alunoRoutes2.default);
    this.app.use('/fotos/', _fotoRoutes2.default);
  }
}

exports. default = new App().app;
