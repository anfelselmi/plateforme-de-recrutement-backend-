const CandidacyController = require("../controllers/candidacyController");
const route = require("express").Router();
const upload = require("../middleware/upload");
route.post("/create", upload.single('cv'),CandidacyController.createcandidacy);
route.get("/all", CandidacyController.getAllcandidacy);
route.get("/getById/:id", CandidacyController.getcandidacyById);
route.put("/update/:id", CandidacyController.updatecandidacyById);
route.delete("/delete/:id", CandidacyController.deletecandidacyById);
route.get("/getByCandidateId/:id", CandidacyController.getByCandidatId);
route.get("/getByCompanyId/:id",  CandidacyController.getByCompanyId);
module.exports = route;
