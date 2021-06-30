const upload = require("../media/middleware/multer")
const {
  categoryList,
  categoryCreate,
  ingredientCreate
} = require("../controllers/categoryControllers");
const express = require("express");
const router = express.Router();


//Mini Express App
router.post("/:categoryId/ingredients",upload.single("image"), ingredientCreate);
router.get("/", categoryList);
router.post("/",upload.single("image"), categoryCreate);

module.exports = router;
