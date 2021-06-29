const {Ingredient} = require("../db/models");




exports.ingredientList = async (req, res, next) => {
    try {
      const ingredients = await Ingredient.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.json(ingredients);
    } catch (error) {
      next(error);
    }
  };