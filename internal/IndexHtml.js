/**
 * @name IndexHtml
 *
 * @synopsis
 * ```coffeescript [specscript]
 * IndexHtml(options {
 *   title: string,
 *   description: string,
 *   path: string,
 * }) -> html string
 * ```
 */
const IndexHtml = function (options) {
  const {
    title,
    description,
    path,
    image,
  } = options

  const url = `https://rubico.land${path}`

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>${title}</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width">
  <meta name="description" content="${description}" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:type" content="object" />
  <meta property="og:url" content="${url}" />
  <meta property="og:description" content="${description}" />

  ${image == null ? '' : `
  <meta name="image" content="${image}" />
  <meta property="og:image" content="${image}" />
  <meta name="twitter:image" content="${image}" />
  `}

  <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="canonical" href="${url}">

  <script src="https://cdn.jsdelivr.net/npm/rubico@2.8.2/dist/rubico.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/rubico@2.8.2/dist/Transducer.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/arche@1.0.2/index.js"></script>
  <script src="https://unpkg.com/react@17.0.1/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.production.min.js" crossorigin></script>
  <script src="/codemirror/index.js"></script>
  <link rel="stylesheet" href="/codemirror/styles.css">
  <link rel="stylesheet" href="/codemirror/theme/rubico.css">
  <link rel="stylesheet" href="/codemirror/theme/coffeescript.css">
  <link rel="stylesheet" href="/index.css">
  <script src="/codemirror/syntax/javascript.js" async></script>
  <script src="/codemirror/syntax/coffeescript.js" async></script>
  <script src="/codemirror/syntax/htmlmixed.js" async></script>
  <script src="/codemirror/syntax/xml.js" async></script>
  <script src="/codemirror/syntax/css.js" async></script>

  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-179545084-1"></script>
  <script async src="/global-scripts.js"></script>
</head>

<body>
  <div id="react-root"></div>
</body>

<script type="module" src="/index.js"></script>

</html>
  `.trim()
}

module.exports = IndexHtml
