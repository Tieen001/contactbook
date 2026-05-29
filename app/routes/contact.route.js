const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact.controller");

router
  .route("/")
  .get(contactController.findAll)
  .post(contactController.create)
  .delete(contactController.deleteAll);

router.route("/favorite").get(contactController.findAllFavorite);

router
  .route("/:id")
  .get(contactController.findOne)
  .put(contactController.update)
  .delete(contactController.delete);

module.exports = router;
