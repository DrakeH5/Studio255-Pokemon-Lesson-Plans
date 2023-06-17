function getPIXELData(ctx, x, y){
    var pixelData = ctx.getImageData(x, y, 1, 1).data
    return pixelData[0], pixelData[1], pixelData[3]
}


function getData(canvas, width, height, pixilization) {
    ctx = canvas.getContext("2d", {willReadFrequently: true})
    var collection = []
    for(var i = 0; i<width+pixilization; i+=pixilization){
        collection.push([])
        for(var j=0; j<height+pixilization; j+=pixilization){
            collection[i/pixilization].push(getPIXELData(ctx, i, j))
        }
    }
    return collection
}
