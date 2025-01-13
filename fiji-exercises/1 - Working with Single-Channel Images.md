# 1 - Working with Single-Channel Images

## 1.1 - Image inspection

1. open the [single_channel.tif](images/single_channel.tif) image (drag & drop, or `File > Open`)
2. `Image > Duplicate` (IJ:28.9) (**shortcut: shift + d**)
3. `Analyze > Histogram` (IJ:30.10) (**shortcut: h**)
4. click `live`
5. `Image > Adjust > Brightness/Contrast` (**shortcut: (cmd/ctrl) + shift + c**)
    - play with `Maximum`, `Minimum`, `Brightness` and `Contrast` sliders and with `Auto`, `Set` and `Reset`
    - observe the histogram window, what is changing, what is not?
    - click `Apply`
    - what changed?

## 1.2 - Adjust brightness/contrast of all open images

1. open the three `single_channel_...tif` images in folder `for_exercise_1.2` (drag & drop, or `File > Open`)
2. for all images: `Analyze > Histogram` (IJ:30.10) (**shortcut: h**)
    - click `live`
3. for one image: `Image > Adjust > Brightness/Contrast` (**shortcut: (cmd/ctrl) + shift + c**)
4. adjust contrast with `Maximum`, `Minimum`, `Brightness` or `Contrast` sliders or `Auto`
5. click `Set`
6. check `Propagate to all other open images` checkbox
7. click `OK`
8. what happened to the histograms?
9. what happened to the images?
10. did pixel values change?
11. pick another image and repeat steps 4–7
12. what happened, what is different, is it better/worse?

## 1.3 - File handling and non-invasive editing

1. `File > Open Samples > Blobs` (IJ:26.4) (**shortcut: shift + b**)
2. `Analyze > Tools > Scale Bar` (IJ:30.14.6)
    - set `Color`, `Background`, `Location`
    - check: `Overlay`, `Bold Text`
3. `File > Save As > Tiff` -> `blobs1.tif` (IJ:26.10.1)
    - saving the image as tiff keeps the scale bar as an overlay, so pixel values below it are kept
    - NOTE: you can see the ovarlay scale bar in the saved image **only** if you open it in Fiji
    - continue with [1.4](#file-handling-and-invasive-editing)

## 1.4 - File handling and invasive editing

1. open the `blobs1.tif` saved in [1.3](#file-handling-and-non-invasive-editing) (drag & drop, or `File > Open`)
2. Image > Info (IJ:28.3) (**shortcut: i**)
3. `Image > Overlay > Remove Overlay` (IJ:28.14.7)
    - the scale bar should disappear since it was saved as an overlay
4. `Analyze > Set Scale` (IJ:30.8)
    - set scale such as image is 100 um long in each dimension
5. `Analyze > Tools > Scale Bar` (IJ:30.14.6)
    - set `Color`, `Background`, `Location`
    - uncheck `Overlay`
6. `File > Save As > Tiff` -> `blobs2.tif` (IJ:26.10.1)
7. load again to check the difference (e.g. check info, hover over the scale bar and look at the pixel values)