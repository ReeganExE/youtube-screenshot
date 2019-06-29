'use strict';

(function(window, document) {
    var canvas = document.createElement('canvas');
    var video = document.querySelector('video');
    var ctx = canvas.getContext('2d');

    // Change the size here
    canvas.width = parseInt(video.offsetWidth);
    canvas.height = parseInt(video.offsetHeight);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Won't work on file:/// URLs. SecurityError: Tainted canvases may not be exported.
    var base64ImageData = canvas.toDataURL('image/jpeg');
    var filename = 'snap-' + canvas.width + 'x' + canvas.height + '-' + video.currentTime + '.jpg';

    // Wrap <img> in link to download image because 
    // the context menu Save Image as... is blocked for security reasons
    var a = document.createElement('a');
    a.download = filename;
    a.href = base64ImageData;

    var img = document.createElement('img');
    img.src = base64ImageData;
    img.alt = filename;
    img.title = 'Click to save ' + filename;

    window.open().document.body.appendChild(a).appendChild(img);
})(window, document);
