"use client";
import { useState } from "react";

export function useNotifications() {
  const [notifications, setNotifications] = useState<string[]>([]);

  function addNotification(msg: string) {
    setNotifications((prev) => [...prev, msg]);
  }

  return { notifications, addNotification };
}