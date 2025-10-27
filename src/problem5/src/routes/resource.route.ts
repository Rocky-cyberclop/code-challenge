import { Router } from "express";
import * as controller from "../controllers/resource.controller";

const router = Router();

router.post("/", controller.create);
router.get("/", controller.list);
router.get("/:id", controller.detail);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

controller.init();

export default router;
