//Defining the Port
const PORT = 8000;

//Importing modules
const express = require("express");
const mysql = require("mysql");
const connection = require("./database");
let app = express();

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