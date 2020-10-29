const { Router } = require("express");
const controllers = require("../controllers/announcements");

const router = Router();

router.get("/announcements", controllers.getAnnouncements);
router.get("/announcements/:id", controllers.getAnnouncement);
router.post("/announcements", controllers.createAnnouncement);
router.put("/announcements/:id", controllers.updateAnnouncement);
router.delete("/announcements/:id", controllers.deleteAnnouncement);

module.exports = router;
