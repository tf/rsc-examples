"use client";

import { useEffect } from "react";

export default function ExpensiveThing() {
  useEffect(() => {
    console.log("Expensive");
  });

  return <div>Expensive</div>;
}
