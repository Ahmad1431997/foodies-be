const { Category, Ingredient } = require("../db/models");

exports.categoryList = async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },

      include: [
        {
          model: Ingredient,
          attributes: ["id"],
          as: "ingredients",
        },
      ],
    });
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

exports.categoryCreate = async (req, res, next) => {
  try {
    req.body.image=`http://localhost:8080/media/${req.file.filename}`
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

exports.ingredientCreate = async (req, res, next) => {
  try {
    // console.log(req);
    
    const foundCategory = await Category.findByPk(req.params.categoryId);
    // console.log(foundCategory)
    if (foundCategory) {
      req.body.image=`http://localhost:8080/media/${req.file.filename}`
        req.body.categoryId = foundCategory.id //this is to make a forienKey
      const newIngredient = await Ingredient.create(req.body);
      console.log(newIngredient)
      res.status(201).json(newIngredient);
    } else {
      next({ message: "Category Not Found", status: 404 });
    }
  } catch (error) {
    next(error);
  }
};
