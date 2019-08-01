const router = require("express").Router();	
const eventController = require("../../controllers/eventControllers");	

 // Matches with "/api/event"	
router.route("/")	
    .get(eventController.searchAll)	
    .post(eventController.create);	

 // Matches with "/api/event/:id"	
router	
    .route("/:id")	
    .get(eventController.searchOne)	
    .put(eventController.update)	
    .delete(eventController.delete);	

 module.exports = router 