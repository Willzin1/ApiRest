"use strict";require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoreAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialecOptions: {
    timezone: 'America/Sao_paulo',
  },
  timezone: 'America/Sao_paulo',
};
