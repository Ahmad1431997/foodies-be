
const { Recipe, Ingredient, RecipeIngredients,Recipe_Ingredient } = require("../db/models");



exports.createRecipe = async (req, res, next) => {
  try {
   
    //   req.body.image =`http://localhost:8080/media/${req.file.filename}`;
    // str.split(",").forEach(element => {
    //     const newRecipe = await Recipe.create(req.body);
    //     newRecipe.addIngredient(await Ingredient.findByPk(element));
    // });
   
    
    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};



exports.recipeList = async (req, res, next) => {
    try {
      const recipes = await Recipe.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: 
          {
            model: Ingredient,
            attributes: ["id"],
            as:"ingredients",
          
          },
        
        
      });
      res.json(recipes);
    } catch (error) {
      next(error);
    }
  };