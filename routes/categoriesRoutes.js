const {
  categoryList,
  categoryCreate,
  ingredientCreate
} = require("../controllers/categoryControllers");
const express = require("express");
const router = express.Router();


//Mini Express App
router.post("/:categoryId/ingredients", ingredientCreate);
router.get("/", categoryList);
router.post("/", categoryCreate);

module.exports = router;
