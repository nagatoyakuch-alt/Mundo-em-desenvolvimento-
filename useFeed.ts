"use client";
import { useState } from "react";

export function useFeed() {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Video Demo",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ]);

  return { videos };
}