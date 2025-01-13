"use client";

import { useEffect } from "react";

export function Logger() {
  useEffect(() => console.log("Expensive"), []);
  return "Log";
}
