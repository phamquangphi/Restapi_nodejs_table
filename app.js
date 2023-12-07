const express = require("express");
const methodOverride = require("method-override");
const app = express();

const port = 9032;
//cho phép client gửi body json lên
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require("./routers");
const connectDB = require("./configs/database");

app.set("views", "./views");
app.set("view enigne", "ejs");

app.use(express.static("./publics"));
connectDB();
router(app);

app.listen(port, () => {
  console.log(`Server run at port ${port}`);
});
