const {
    ingredientList,
  
   
  } = require("../controllers/ingredientController");
  const express = require("express");
  const router = express.Router();
  
  
  //Mini Express App
  
  router.get("/", ingredientList);
 
  
  module.exports = router;