export interface IVideo {
  title: string,
  description: string,
  url: string
}

export interface IVideoInDB {
  _id: string,
  title: string,
  description: string,
  url: string,
  createdAt: string,
  updateAt: string
}

export interface IUpdateVideo {
  title?: string,
  description?: string,
  url?: string,
}
