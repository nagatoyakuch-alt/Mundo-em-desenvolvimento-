"use client";
import { useState } from "react";

export function useFollow() {
  const [following, setFollowing] = useState(false);

  function toggleFollow() {
    setFollowing(!following);
  }

  return { following, toggleFollow };
}