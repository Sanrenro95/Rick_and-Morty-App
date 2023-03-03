const { Router } = require('express');
const { getChatById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail");

const router = Router();

router.get("/onsearch/:id", getChatById);
router.get("/detail/:detailId", getCharDetail);

module.exports={
    router,
}