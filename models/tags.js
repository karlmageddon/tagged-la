module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tags', {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    description_source: DataTypes.STRING,
    address: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    instagram_embed: DataTypes.TEXT
  })
}
