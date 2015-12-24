# clew

An even more light-weight (1.5kb) tooltip in pure css

## Install

CDN: https://npmcdn.com/clew@latest

```bash
npm install clew
```

Are you using PostCSS? Then simple enough:

```css
/* work with postcss-import */
@import "clew";
/* or the prefixed version */
@import "clew/dist/prefixed/clew.css";
```

## Usage

Simply write like this in your HTML:

```html
<button class="clew-$direction" data-clew="Tips To Show">
  My Custom Button
</button>
```

Position your tooltip:

```html
clew-top
clew-bottom
clew-left
clew-right
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)
