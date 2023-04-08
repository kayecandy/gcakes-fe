const ContentSecurityPolicy = [
  "default-src https: 'self'",
  "object-src 'none'",
  "style-src 'unsafe-inline' 'self' http: https: http://localhost:3000",
  "script-src https: 'unsafe-inline' 'self' http: blob: http://localhost:3000/* 'unsafe-eval' web.webformscr.com",
  "connect-src http://localhost:3030 https: data: blob: 'self' ws: wss:",
  "img-src https: data: 'self' web.webformscr.com images.ctfassets.net",
];

const PermissionsPolicy = [
  "accelerometer=()",
  "autoplay=()",
  "camera=()",
  "display-capture=()",
  "encrypted-media=()",
  "gyroscope=()",
  "magnetometer=()",
  "microphone=()",
  "midi=()",
  "payment=()",
  "picture-in-picture=()",
  "publickey-credentials-get=()",
  "screen-wake-lock=()",
  "sync-xhr=(self)",
  "usb=()",
  "xr-spatial-tracking=()",
];

const securityHeaders = [
  {
    // Inform browsers that only HTTPS should be used.
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // [DEPRECATED by Content-Security-Policy. Retained for older
    // browser support]
    // Prevent loading pages that may be compromised by Cross Site
    // Scripting (XSS) attacks. Be careful if changing the mode while
    // keeping the overall configuration enabled (see
    // "Vulnerabilities caused by XSS filtering" in the linked
    // document).
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    // Prevent rendering embedded content (e.g., <iframe>) from other
    // origins.
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    // Prevent browsers from guessing content types when not specified.
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Restrict how much information the browser provides to other sites.
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Limit 3rd party locations that content can be loaded from.
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.join("; "),
  },
  {
    // Limit which browser features are made available. This feature
    // is EXPERIMENTAL.
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
    key: "Permissions-Policy",
    value: PermissionsPolicy.join(", "),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    BACKEND_URL: process.env.BACKEND_URL,
    SENDPULSE_SUBSCRIPTION_FORM_ID: process.env.SENDPULSE_SUBSCRIPTION_FORM_ID
  },
  images: {
    domains: ["images.ctfassets.net"]
  },
  // Default headers
  async headers() {
    return [
      {
        // Apply secure headers to all routes by default
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
}

module.exports = nextConfig
