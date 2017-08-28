# Making custom image maps with Leaflet

sourced at http://build-failed.blogspot.com/2012/11/zoomable-image-with-leaflet.html

## Getting started

install GDAL and Python as well as the Python-GDAL bindings.

### Command lines

Create a large image file which dimensions are multiples of 256

Run the `gdal2tiles.py` script, if you want more than two zoom levels (options `-z [minZoom] - [maxZoom]` ), get a larger image.

`gdal2tiles.py -p raster -z 0-6 -w none map.png`
