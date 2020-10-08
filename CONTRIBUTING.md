Hello there! Thank you for your interest in contributing to rubico.land.

Here's the current state of things.

 * In order to achieve an SPA architecture with real routes (beyond `#`), each path in the website loads the same, duplicated `/index.html` file. This is a hack and might need some sprucing up or rethinking because every time a new function or property method is added you'd have to go and manually add the new path to the `/copy_index` script. Perhaps it would make sense to convert this script to JavaScript and dynamically reference the methods. This may require a light refactor.

 * Our only two JavaScript entrypoints are located at the bottom of `/index.html` as `<script></script>` tags. One points to `/index.js` and one points to `/navigation.js`. `/navigation.js` is a mini experiment with preventing default behavior of the navigation links using `Event.prototype.preventDefault` ([mdn](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)), and can be merged with `/index.js` if it comes down to it. `/index.js` handles routing, calling React, and loading JavaScript data files in `/mdast`.

 * Content on rubico.land works by parsing comments from rubico source code and `.md` files from various directories via [Cronist](https://github.com/richytong/cronist) into the `.js` files you see in `/mdast`. The scripts are defined in `package.json`. If you want to run them yourself, ensure you have [rubico](https://github.com/a-synchronous/rubico) and [a-synchronous/md](https://github.com/a-synchronous/md) in the same directory as your rubico.land directory.

 * To load scripts as well as the above mdast `.js` files, this project uses the latest and greatest ES Module system. Cronist takes advantage of ES Modules to enable loading of markdown content as JavaScript defined in the [mdast](https://github.com/syntax-tree/mdast) format. Read more about ES Modules - [cartoon deepdive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

 * This project uses React in vanilla JavaScript. All React interactions in this project start at `/ReactElement.js`, which is a wrapper around `React.createElement` for flexible, jsx-like syntax when using React in vanilla JavaScript. For example, this is what a React Component looks like in this project.

```javascript
// { goto: function, href: string, children: Array } => React.Element
const ShortLink = ReactElement(({
  goto, href, children,
}) => A({
  href,
  class: 'short-link',
  onClick(event) {
    event.preventDefault()
    goto(href)
  },
}, children))
```
