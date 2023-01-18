import axios from "axios";

import { IVideo } from "../components/Videos/video.interfaces"

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

export const getVideos = async () => {
  return axios.get(`${API_URL}/videos`);
}

export const getVideoById = async (id: string) => {
  return axios.get(`${API_URL}/videos/${id}`);
}

export const createVideo = async(videoPayload: IVideo) => {
  return axios.post(`${API_URL}/videos`, videoPayload);
}

export const updateVideo = async(id: string, videoPayload: IVideo) => {
  return axios.put(`${API_URL}/videos/${id}`, videoPayload);
}

export const deleteVideo = async(id: string) => {
  return axios.delete(`${API_URL}/videos/${id}`);
}