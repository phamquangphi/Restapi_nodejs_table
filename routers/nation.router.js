const express = require("express");
const router = express.Router();

const {
  renderUINationPage,
  createNation,
  deleteNations,
  findNationById,
  editNations,
} = require("../controllers/nation.controller");

router.route("/").get(renderUINationPage).post(createNation);
router
  .route("/:id")
  .get(findNationById)
  .delete(deleteNations)
  .patch(editNations);
module.exports = router;
