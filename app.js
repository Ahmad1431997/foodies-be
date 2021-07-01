const express = require("express");
const ingredientsRoutes= require("./routes/ingredientsRoutes")
const categoriesRoutes=require("./routes/categoriesRoutes")
const recipesRoutes=require("./routes/recipesRoutes")
const path = require("path");
// const db = require("./db/models");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/ingredients", ingredientsRoutes);
app.use("/categories", categoriesRoutes);
app.use("/recipes" , recipesRoutes)

app.use("/media",express.static(path.join(__dirname,"media")))


//error middleWare
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

//not Found middleWare
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});





// db.sequelize.authenticate();
app.listen(8080);
