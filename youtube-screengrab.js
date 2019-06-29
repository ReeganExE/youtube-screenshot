'use strict';

(function (window, document) {
    var canvas = document.createElement('canvas');
    var video = document.querySelector('video');
    var ctx = canvas.getContext('2d');

    // Change the size here
    canvas.width = parseInt(video.offsetWidth);
    canvas.height =  parseInt(video.offsetHeight);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    var a = document.createElement('a');
    a.download = 'snap-' + canvas.width + 'x' + canvas.height + '-' + video.currentTime + '.jpg';
    // Won't work on file:/// URLs. SecurityError: Tainted canvases may not be exported.
    a.href = canvas.toDataURL('image/jpeg');
    document.body.appendChild(a).click();
    a.remove();
})(window, document)
