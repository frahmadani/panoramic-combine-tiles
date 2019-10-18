# Panoramic Combine Tiles

Tool for combining tiled cubemap panoramic images into equirectangular images.

## Instructions
1. Place the tile images in PNG format into separate directories under 'images', e.g. images/tile1/1.png. You can have multiple dirs under 'images'
2. The tile images are expected to consist of 49 images, forming 7x7 grid
3. Create an empty dir called `stitched`
4. Run the tool using `node index.js`
5. Find the stitched images on `stitched` folder

This tool relies heavily on [combine-tile](https://github.com/derhuerst/combine-tiles) library by [derhuers](https://github.com/derhuerst) and [sharp](https://www.npmjs.com/package/sharp)