const express = require("express");
const processoController = require("../controllers/ProcessoController");
const areaController = require("../controllers/areaController");
const subprocessoController = require("../controllers/subprocessoController");
// const userController = require("../controllers/userController");

const router = express.Router();

router.post("/area", areaController.create);
router.get("/area", areaController.listar);
router.get("/area/:id", areaController.ler);
router.put("/area/:id", areaController.update);
router.delete("/area/:id", areaController.delete);
router.post("/processo", processoController.create);
router.get("/processo", processoController.listar);
router.get("/processo/:id", processoController.ler);
router.put("/processo/:id", processoController.update);


router.post("/subprocesso", subprocessoController.create);
router.get("/:processoId/subprocesso", subprocessoController.listar);
router.get("/:processoId/subprocesso/:id", subprocessoController.ler);
module.exports=router;