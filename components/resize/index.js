const sharp = require('sharp')
const {join} = require('path')

let originalImage = join(__dirname, 'tile6/combined.png')
let outputImage = join(__dirname, 'tile6/cropped.png')

sharp(originalImage).extract({ width: 3373, height: 3373, left: 0, top: 0}).toFile(outputImage)
.then(function (newfile) {
	console.log('saved')
	return
})
.catch(function(err) {
	console.log(err)
	return
})
