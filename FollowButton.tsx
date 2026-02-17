"use client";
import { useState } from "react";

export default function FollowButton() {
  const [following, setFollowing] = useState(false);

  return (
    <button onClick={() => setFollowing(!following)}>
      {following ? "Seguindo" : "Seguir"}
    </button>
  );
}