import { Router } from "express";

import * as videosController from "../controllers/videos.controller";

const router = Router();

router.get("", videosController.getVideos);
router.post("", videosController.createVideo);
router.put("/:id", videosController.updateVideo);
router.delete("/:id", videosController.deleteVideo);
router.get("/:id", videosController.getVideoById);

export default router;
