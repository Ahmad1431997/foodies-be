const {Ingredient,Recipe} = require("../db/models");




exports.ingredientList = async (req, res, next) => {
    try {
      const ingredients = await Ingredient.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: 
          {
            model: Recipe,
            attributes: ["id"],
            as:"recipes",
          },
        
      });
      res.json(ingredients);
    } catch (error) {
      next(error);
    }
  };