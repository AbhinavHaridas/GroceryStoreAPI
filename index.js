//Defining the Port
const PORT = 8000;
const cors = require("cors");

//Importing modules
const express = require("express");
const bodyParser = require("body-parser");
let app = express();

// Adding middleware
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Defining routes
const customerRouter = require("./routes/customers");
const offerRouter = require("./routes/offers");
const categoryRouter = require("./routes/categories");
const feedbackRouter = require("./routes/feedbacks");
const paymentRouter = require("./routes/payments");
const inventoryRouter = require("./routes/inventories");
const orderRouter = require("./routes/orders");
const dealRouter = require("./routes/deals");

//Using routes
app.use("/customers", customerRouter);
app.use("/offers", offerRouter);
app.use("/categories", categoryRouter);
app.use("/feedbacks", feedbackRouter);
app.use("/payments", paymentRouter);
app.use("/inventories", inventoryRouter);
app.use("/orders", orderRouter);
app.use("/deals", dealRouter);

app.listen(PORT, () => console.log(`listening to requests on port ${PORT}`));
