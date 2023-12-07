const Nation = require("../models/nations");

module.exports = {
  renderUINationPage: async (req, res) => {
    try {
      const nations = await Nation.find();
      return res.render("nations/index.ejs", { nations: nations });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  createNation: async (req, res) => {
    try {
      await Nation.create(req.body);
      const nations = await Nation.find();
      return res.render("nations/index.ejs", { nations: nations });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  deleteNations: async (req, res) => {
    try {
      const id = req.params.id;
      await Nation.findByIdAndDelete(id);
      return res.status(200).json({
        statusCode: 200,
        message: "Delete success!",
      });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  findNationById: async (req, res) => {
    try {
      const id = req.params.id;
      const nation = await Nation.findById(id);
      return res.render("nations/nations.detail.ejs", { nation: nation });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  editNations: async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
      await Nation.findByIdAndUpdate(id, body);
      const nations = await Nation.find();
      return res.redirect("/nations");
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};
