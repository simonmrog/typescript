import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

import "./Video.css";
import { IVideo } from "./video.interfaces";
import * as videosService from "../../services/videosService";

interface IProps {
  video: IVideo;
  loadVideos: () => void;
}

export default function Video({ video, loadVideos }: IProps) {
  const navigate = useNavigate();
  const handleDelete = async () => {
    if (video._id) {
      await videosService.deleteVideo(video._id);
      loadVideos();
    }
  };

  return (
    <div className="col-md-4 col-xl-3">
      <div className="card card-body video-card">
        <div className="d-flex justify-content-between">
          <h2
            className="video-title"
            onClick={() => navigate(`/update/${video._id}`)}
          >
            {video.title}
          </h2>
          <span className="text-danger" onClick={handleDelete}>
            X
          </span>
        </div>
        <p>{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url={video.url} width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
}
