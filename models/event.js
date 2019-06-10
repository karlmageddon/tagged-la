module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Event', {
    name: DataTypes.TEXT,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    image_url: DataTypes.STRING,
    event_url: DataTypes.STRING,
    address: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    time: DataTypes.STRING,
    date: DataTypes.STRING
  })
}
