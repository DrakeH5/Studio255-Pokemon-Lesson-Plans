function ImageParser(fileLocation, pixilization = 1) {
  var canvas = createCanvas()
  drawImgToCanvas(fileLocation, canvas, function(imgWidth, imgHeight){
    collectionOfData = getData(canvas, imgWidth, imgHeight, pixilization)
    console.log(collectionOfData)
  })
}
