'use strict'

const {join} = require('path')
const combineTiles = require('./components/combine-tiles')
// const resize = require('./components/resize')
const fs = require('fs')

const size = 512

const source_image_dir = join(__dirname, 'images/tile1/')

const tiles = []

const files = fs.readdirSync(source_image_dir);

let i = 0
let j = 1

files.forEach(file => {
	if (i >= 7) {
		i -= 7
		j++
		i++
	} else {
		i++
	}
	
	tiles.push({
		x: i,
		y: j,
		file: join(source_image_dir, file)
	})
})

const dest = join(__dirname, 'stitched/1.png')

combineTiles(tiles, size, size, dest)
// .then(() => {
// 	resize()
// 	process.exit(0)
// })
.catch((err) => {
	console.error(err)
	process.exit(1)
})
