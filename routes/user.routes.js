const users = require("../controllers/user.controller");
var router = require("express").Router();
router.post("", users.create);
router.get("", users.showAll)
router.get("/:id", users.detail)
module.exports = router;
