function createCanvas() {
    var canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;
    canvas.style.opacity = 0
    canvas.style.position = "absolute"
    canvas.style.top = -10000
    document.getElementsByTagName("body")[0].appendChild(canvas);
    return canvas
}

function drawImgToCanvas(imgSrc, canvas, _callback) {
    var ctx = canvas.getContext("2d", {willReadFrequently: true});
    let img = document.createElement('img');
    img.crossOrigin = "Anonymous";
    img.src = imgSrc
    img.onload = function(){
        img.style.width = "auto"
        img.style.height = "auto"
        ctx.drawImage(img, 0, 0, img.width, img.height);
        _callback(img.width, img.height)
    }
}