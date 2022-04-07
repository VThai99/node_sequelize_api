module.exports = {
  HOST: "node-sequelize.ccjxkf9rovy5.ap-southeast-1.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "Vietthai99",
  DB: "sequelizeDB",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
