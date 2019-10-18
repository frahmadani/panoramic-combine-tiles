'use strict'

const {join} = require('path')
const combineTiles = require('./components/combine-tiles')
const resize = require('./components/resize')
const fs = require('fs')

const size = 512

const images_dir = join(__dirname, 'images/')
const tile_dirs = fs.readdirSync(images_dir)

tile_dirs.forEach((dir, index) => {
	const tile_path = images_dir + dir
	const tiles = []
	const files = fs.readdirSync(tile_path)
	
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
			file: join(tile_path, file)
		})
	})

	const dest = join(__dirname, 'stitched', `temp_${index+1}.png`)

	combineTiles(tiles, size, size, dest)
	.then(() => {
		console.log(`temp_${index+1}.png is created`)
		resize.resize(__dirname, index)
	})
	.catch((err) => {
		console.error(err)
		process.exit(1)
	})

})