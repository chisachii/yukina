/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { AstroIntegration } from "@swup/astro";

declare global {
  interface Window {
    swup: AstroIntegration;
  }
}
export {};

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}
