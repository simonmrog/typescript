import React, { FormEvent, ChangeEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { IVideo } from "./video.interfaces";
import * as videosService from "../../services/videosService";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface IParams {
  id?: string;
}

export default function VideoForm() {
  const navigate = useNavigate();
  const params: IParams = useParams();

  const initialState = {
    title: "",
    description: "",
    url: "",
  };
  const [video, setVideo] = useState<IVideo>(initialState);

  useEffect(() => {
    if (params.id) getVideo(params.id);
  }, [params.id]);

  const getVideo = async (id: string) => {
    const res = await videosService.getVideoById(id);
    const { title, description, url } = res.data;
    setVideo({ title, description, url });
    console.log(res.data);
  };

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!params.id) {
        const res = await videosService.createVideo(video);
        toast.success("Video Created Successfully", res.data);
        setVideo(initialState);
      } else {
        const res = await videosService.updateVideo(params.id, video);
        toast.success("Video Updated Successfully", res.data);
        navigate("/");
      }
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Video</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Video title"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.title}
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="Video URL"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Video description"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.description}
                />
              </div>
              {params.id ? (
                <button className="btn btn-primary">Update Video</button>
              ) : (
                <button className="btn btn-primary">Create Video</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
