const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },

    image: { type: DataTypes.STRING, allowNull: false },

    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  SequelizeSlugify.slugifyModel(Category, {
    source: ["name"],
  });
//   Category.associate = (models) => {
//     models.Shop.hasMany(Category, {
//       foreignKey: "shopId",
//       allowNull: false,
//       as: "categories",
//     });

//     Category.belongsTo(models.Shop, {
//       foreignKey: "shopId",
//     });
//   };

  return Category;
};
