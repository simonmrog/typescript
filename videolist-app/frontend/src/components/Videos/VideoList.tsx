import React, { useState, useEffect } from "react";

import { IVideo } from "./video.interfaces";
import * as videoService from "../../services/videosService";
import Video from "./Video";

export default function VideoList() {
  const [videos, setVideos] = useState<Array<IVideo>>([]);

  const loadVideos = async () => {
    const response = await videoService.getVideos();
    const videos: Array<IVideo> = response.data.map((video: IVideo) => {
      return {
        ...video,
        createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
        updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
      };
    });
    const sortedVideos = videos.sort(
      (a: IVideo, b: IVideo) => b.createdAt!.getTime() - a.createdAt!.getTime()
    );
    setVideos(sortedVideos);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className="row">
      {videos.map((video) => (
        <Video key={video.url} video={video} loadVideos={loadVideos} />
      ))}
    </div>
  );
}
