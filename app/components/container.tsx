"use client";

import React from "react";

function Container({
  children,
  fullWidth,
  className,
}: {
  children: any;
  fullWidth?: boolean;
  className?: string;
}) {
  return (
    <>
      <main
        className={`m-auto w-full transition-all h-full minHiegth pt-12 mb-6 ${
          !fullWidth ? "max-w-3xl mx-auto px-4 max-md:px-2" : "px-4 md:px-24"
        } ${!className ? "" : className}`}
      >
        <svg
          className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light left-0 top-0"
          width="100%"
          height="100%"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"
            ></feTurbulence>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        {children}
        <div className="pointer-events-none fixed inset-0 overflow-hidden left-0 top-0 min-h-screen">
          <div className="h-full bg-[url('https://res.cloudinary.com/delba/image/upload/h_500/bg_gradient_pfosr9')] bg-top bg-no-repeat opacity-[0.3] bg-cover"></div>
        </div>
      </main>
    </>
  );
}
export default Container;
