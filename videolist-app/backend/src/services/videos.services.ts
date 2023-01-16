import video from "../models/video";
import VideoModel from "../models/video";
import IVideo from "../models/video.interface";

export const getVideos = () => {
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

export const updateVideo = () => {
};

export const deleteVideo = () => {
};
