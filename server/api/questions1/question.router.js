const router = require("express").Router();

const { createQuestion, getQuestions } = require("./question.controller");

router.post("/", createQuestion);
router.get("/all", getQuestions);
// router.get("/id", getQuestion);

module.exports = router;
