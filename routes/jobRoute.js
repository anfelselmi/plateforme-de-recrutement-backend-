const JobController = require("../controllers/jobController");
const route = require("express").Router();
const passport = require("passport");
route.post("/create",/*passport.authenticate("jwt", { session: false }),*/ JobController.create);
route.get("/getAll",/* passport.authenticate("jwt", { session: false }), */JobController.getAll);
route.get("/getById/:id",/*passport.authenticate("jwt", { session: false }),*/JobController.getById);
route.put("/update/:id",/*passport.authenticate("jwt", { session: false }),*/ JobController.update);
route.delete("/delete/:id",/*passport.authenticate("jwt", { session: false }),*/JobController.delete);
route.get("/getByCompanyId/:id",/*passport.authenticate("jwt", { session: false }),*/JobController.getByCompanyId);
module.exports = route;