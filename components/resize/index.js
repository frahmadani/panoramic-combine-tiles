const sharp = require('sharp')
const {join} = require('path')
const fs = require('fs')

exports.resize = (dir, idx) => {
	let originalImage = join(dir, '/stitched/', `temp_${idx+1}.png`)
	let outputImage = join(dir, '/stitched/', `${idx+1}.png`)
	
	sharp(originalImage).extract({ width: 3373, height: 3373, left: 0, top: 0}).toFile(outputImage)
	.then(function (newfile) {
		console.log(`${idx+1}.png is cropped`)
		fs.unlinkSync(`${originalImage}`)
		return
	})
	.catch(function(err) {
		console.log(err)
		return
	})
}
