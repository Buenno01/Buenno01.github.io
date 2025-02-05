'use client';
import { useEffect } from "react";

function LocomotiveScroll() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        new LocomotiveScroll();
      }
    )();
  }, []);

  return null;
}

export default LocomotiveScroll;