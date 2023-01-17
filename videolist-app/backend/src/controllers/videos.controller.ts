import { RequestHandler } from "express";
import { nextTick } from "process";

import * as videosService from "../services/videos.services";

export const getVideos: RequestHandler = async (req, res, next): Promise<void> => {
  const videos = await videosService.getVideos();
  res.status(200).json(videos);
}

export const getVideoById: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const { id } = req.params;
    const video = await videosService.getVideoById(id);
    if (!video)
      throw new Error("Video not found");
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
}

export const createVideo: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const { title, description, url } = req.body;
    const newVideo = await videosService.createVideo(
      { title, description, url }
    );
    res.status(201).json(newVideo);
  } catch (err) {
    next(err);
  }
}

export const updateVideo: RequestHandler = async (req, res, next): Promise<void> => {
  const { id } = req.params;
  const updated = await videosService.updateVideo(id, req.body);
  res.status(200).json(updated);
}

export const deleteVideo: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await videosService.deleteVideo(id);
    if (!deleted)
      throw new Error("It was an error while deleting record");
    res.status(200).json({ status: "ok", message: "Record deleted successfully"});
  } catch(err) {
    next(err);
  }
}
