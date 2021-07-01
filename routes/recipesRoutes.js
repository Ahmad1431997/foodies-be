const {recipeList,createRecipe} = require("../controllers/recipeController")
const upload = require("../media/middleware/multer")
  const express = require("express");
  const router = express.Router();




router.post("/",upload.single("image"), createRecipe)
router.get("/", recipeList);

module.exports = router;