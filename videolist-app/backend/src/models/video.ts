import { Schema, model } from "mongoose";

import IVideo from "./video.interface";

const VideoSchema = new Schema<IVideo>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  }, 
  url: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  versionKey: false,
  timestamps: true
});

export default model("videos", VideoSchema);
