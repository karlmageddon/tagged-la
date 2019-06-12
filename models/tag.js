'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    description_source: DataTypes.STRING,
    address: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    instagram_embed: DataTypes.TEXT
  });
  return Tag;
};
