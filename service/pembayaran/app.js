const express = require("express");
const app = express();
const PORT = process.env.PORT || 4003;
const route = require("./route");
const { connect } = require("./config/mongodb");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/pembayaran", route);

connect().then(() => {
  app.listen(PORT, (_) => {
    console.log(`this app run at http://localhost:${PORT}`);
  });
});
