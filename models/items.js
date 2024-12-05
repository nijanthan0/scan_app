const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  cost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  discountedPrice: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  speciality: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  video: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Item;
