const router = require("express").Router();	
const userController = require("../../controllers/userControllers");	

 // Matches with "/api/user"	
router.route("/")	
    .get(userController.searchAll)	
    .post(userController.create);

router.route("/signin")
      .post(userController.searchByEmail)

 // Matches with "/api/user/:id"	
router.route("/:id")	
    .get(userController.searchById)	
    .put(userController.update)	
    .delete(userController.delete);	

 module.exports = router 