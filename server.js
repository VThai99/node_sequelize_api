const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require('./routes/user.routes')
const port = process.env.PORT || 5000;
var corsOptions = {
  origin: "*",
};
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swaggerOutput.json')
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("./models/index");
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});
// when need recreate database
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
app.use("/api/user", userRoutes)
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.listen(port, () => console.log(`server is running at port ${port}`));
