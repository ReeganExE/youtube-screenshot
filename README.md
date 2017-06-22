
# Take Snapshot of Youtube video or video on any sites

A script that help you take current snapshot of playing video.

Source code: [youtube-screenshot.js](./youtube-screenshot.js)
  
Gzip: [youtube-screenshot.min.js](./youtube-screenshot.min.js)

Browser Bookmak:

```js
javascript:void(!function(e,t){var a=t.createElement("canvas"),i=t.querySelector("video"),n=a.getContext("2d");a.width=parseInt(i.style.width),a.height=parseInt(i.style.height),n.drawImage(i,0,0,a.width,a.height),e.open(a.toDataURL("image/jpeg"))}(window,document))
```

## Demo

![](demo.gif)

Reference: https://stackoverflow.com/a/13765373/1099314