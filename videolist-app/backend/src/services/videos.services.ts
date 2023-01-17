import video from "../models/video";
import VideoModel from "../models/video";
import { IVideo, IUpdateVideo, IVideoInDB } from "../models/video.interface";

export const getVideos = () => {
  return VideoModel.find();
};

export const getVideoById = async (id: string) => {
  return await VideoModel.findById(id);
};

export const createVideo = async (payload: IVideo) => {
  const videoFound = await VideoModel.findOne({ url: payload.url});
  if (videoFound)
    throw new Error("The URL already exists in DB");
  const newVideo = new VideoModel(payload);
  return newVideo.save();
};

export const updateVideo = async (id: string, payload: IUpdateVideo): Promise<IVideoInDB | null> => {
  return await VideoModel.findByIdAndUpdate(id, payload, { new: true });
};

export const deleteVideo = async (id: string): Promise<IVideoInDB | null> => {
  const video = await VideoModel.findById(id);
  if (!video)
    throw new Error("Video not found");
  return await VideoModel.findByIdAndDelete(id);
};
