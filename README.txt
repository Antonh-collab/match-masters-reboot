Match Masters Reboot - partner deck (24Play)

Static site. No build step, no server code.

Deploy: upload this whole folder as-is to any static host (S3/CloudFront, Netlify, Vercel, nginx...).
Open index.html at the root URL.

Structure:
  index.html            the deck (11 slides; arrow keys or the < > buttons to navigate; #s5 deep-links to slide 5)
  playables/*.html      the 5 playables shown in phone frames on slides 4 and 5 (loaded in iframes, same origin)
  playables/mraid.js    small MRAID stand-in so AppLovin builds start outside an ad network

Notes:
  - Must be served over http(s), not opened as file:// (iframes + fetch need an origin).
  - Keep playables/ next to index.html; paths are relative.
  - Each playable has a short shim at the top of <head> that serves data:/blob: URLs to fetch() locally.
    Harmless on a normal host; it was needed for strict Content-Security-Policy viewers.
  - If you add a CSP header, allow: script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; worker-src blob:;
    img-src/media-src/font-src 'self' data: blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src also https://fonts.gstatic.com.
  - Fonts load from Google Fonts (Inter, Inter Tight); falls back to Arial if blocked.
  - ~22 MB total, mostly the playables. Enable gzip/brotli for .html for much faster loads.
