const nationRouter = require("./nation.router");
module.exports = (app) => {
  app.use("/nations", nationRouter);
};
