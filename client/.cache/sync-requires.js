
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/harsha/dev/web/personal/harshamurupudi.com/client/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/harsha/dev/web/personal/harshamurupudi.com/client/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/harsha/dev/web/personal/harshamurupudi.com/client/src/pages/index.js"))
}

