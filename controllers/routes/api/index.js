const router = require("express").Router();
const userRoutes = require("./user");
const eventRoutes = require("./event");

// Book routes
router.use("/user", userRoutes);
router.use("/evemt", eventRoutes);

module.exports = router;