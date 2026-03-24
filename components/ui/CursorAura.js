"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorAura() {
  const auraRef = useRef(null);

  useEffect(() => {
    if (!auraRef.current || !window.matchMedia("(pointer: fine)").matches) {
      return undefined;
    }

    const xTo = gsap.quickTo(auraRef.current, "x", {
      duration: 0.45,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(auraRef.current, "y", {
      duration: 0.45,
      ease: "power3.out",
    });

    const handlePointerMove = (event) => {
      xTo(event.clientX - 120);
      yTo(event.clientY - 120);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={auraRef}
      className="pointer-events-none fixed left-0 top-0 z-[3] hidden h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(49,107,255,0.28)_0%,rgba(49,107,255,0)_72%)] opacity-70 blur-2xl md:block"
      aria-hidden="true"
    />
  );
}
