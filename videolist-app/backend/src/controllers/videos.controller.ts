import { RequestHandler } from "express";
import { nextTick } from "process";

import * as videosService from "../services/videos.services";

export const getVideos: RequestHandler = async (req, res, next) => {
  res.json("videos");
}

export const getVideoById: RequestHandler = async (req, res, next) => {
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

export const createVideo: RequestHandler = async (req, res, next) => {
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

export const updateVideo: RequestHandler = async (req, res) => {
  res.json("videos");
}

export const deleteVideo: RequestHandler = async (req, res) => {
  res.json("videos");
}
