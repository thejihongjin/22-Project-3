const router = require("express").Router();	
const userController = require("../../controllers/userControllers");	

 // Matches with "/api/user"	
router.route("/")	
    .get(userController.searchAll)	
    .post(userController.create);	

 // Matches with "/api/user/:id"	
router	
    .route("/:id")	
    .get(userController.searchOne)	
    .put(userController.update)	
    .delete(userController.delete);	

 module.exports = router 