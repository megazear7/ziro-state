import { html } from 'orison';
import header from '../partials/header.js';
import footer from '../partials/footer.js';

export default context => html`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>${context.root.data.title}</title>
    <script src="/app.js"></script>
    <script src="/ziro.bundled.js"></script>
    <link rel="stylesheet" type="text/css" href="/app.css">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Easy to use web app state management">
    <link rel="icon" href="/icons/favicon.ico">
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#ff3333">

    <!-- Add to homescreen for Chrome on Android. Fallback for manifest.json -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="${context.root.data.title}">

    <!-- Add to homescreen for Safari on iOS -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="${context.root.data.title}">

    <!-- Homescreen icons -->
    <link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="512x512" href="icons/icon-512x512.png">

    <!-- Tile icon for Windows 8 (144x144 + tile color) -->
    <meta name="msapplication-TileImage" content="icons/icon-512x512.png">
    <meta name="msapplication-TileColor" content="#ff3333">
    <meta name="msapplication-tap-highlight" content="no">

    <!-- Default twitter cards -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@username">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="ziro-state">
    <meta property="og:image" content="icons/icon-512x512.png" />
  </head>
  <body>
    ${header(context.root.data.title)}
    <main>
      ${context.page.html}
    </main>
    ${footer()}

    <link rel="stylesheet" href="/highlightjs/github.css">
    <script src="/highlightjs/highlight.pack.min.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
  </body>
</html>
`;
