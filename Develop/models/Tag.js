const { Model, DataTypes, STRING } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model { }

Tag.init(
  {
    // define columns
    id: {
      DataType: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    tag_name: {
      DataType: STRING,
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
