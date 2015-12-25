# clew

An even more light-weight (1.2kb) tooltip in pure css, with animation.

![preview](http://ooo.0o0.ooo/2015/12/24/567c13f3a6228.png)

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

Enable animation:

```html
clew-animation
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)
