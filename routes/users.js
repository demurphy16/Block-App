const { Router } = require("express");
const controllers = require("../controllers/users");

const router = Router();

router.get("/users", controllers.getusers);
router.get("/users/:id", controllers.getuser);
router.user("/users", controllers.createuser);
router.put("/users/:id", controllers.updateuser);
router.delete("/users/:id", controllers.deleteuser);

module.exports = router;