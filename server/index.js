const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// * userRouter
const userRouter = require("./routes/users.routes");
app.use("/users", userRouter);
// * categoryRouter
const categoryRouter = require("./routes/category.routes");
app.use("/category", categoryRouter);
// * cityRouter
const cityRouter = require("./routes/city.routes");
app.use("/city", cityRouter);
// * townRouter
const townRouter = require("./routes/town.routes");
app.use("/town", townRouter);
// * productRouter
const productRouter = require("./routes/products.routes");
app.use("/product", productRouter);
// * ordersRouter
const ordersRouter = require("./routes/orders.routes");
app.use("/orders", ordersRouter);

app.listen(PORT, () => {
  console.log(`SERVER IS WORK TO http://localhost:${PORT}`);
});
