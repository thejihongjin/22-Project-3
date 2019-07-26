const express = require('express');
const routes = require("./controllers/routes");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//mongoose connection, need to add database name
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/lonelyfriendfinderdb",
  { useNewUrlParser: true }
);

//Routes
app.use(routes);

/// Default route for React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`API server now on PORT ${PORT}!`);
});
