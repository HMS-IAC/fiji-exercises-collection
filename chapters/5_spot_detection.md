# 5 - Spot Detection

## 5.1 - Manual spot detection with the Multi-point Tool

1. read all the next steps before beginning
2. open the `beads_001.tif` image in folder [spot_detection](../images/spot_detection.zip) (drag & drop, or `File > Open`)
3. right-click (ctrl-click) on the `Point Tool` in the tool bar and select `MultiTool` (IJ:19.5)
4. double-click on the `Point Tool` in the `toolbar` and customize to your liking (test on image, clear points by `shift + a`)
5. count all beads by clicking on them one by one
6. how long did it take you to click on all the beads (measure with stopwatch the time it took to complete the previous step)?
7. add the points to the `ROI Manager` (e.g. press `t` on your keyboard)
    - NOTE: only one ROI will be added, it contains all the points
8. save the ROI to file (in the ROI Manager window, `More > Save`)
9. click measure in the `ROI Manager` to get number of spots

## 5.2 - Algorithmic spot detection with Find Maxima

useful [Find Maxima info](https://forum.image.sc/t/new-maxima-finder-menu-in-fiji/25504) on the image.sc forum.

1. open the `beads_001.tif` image in folder [spot_detection](../images/spot_detection.zip) (drag & drop, or `File > Open`)
2. `Process > Find Maxima`
3. check `Preview point selection`
4. try different values for `Prominence` and the three checkboxes
5. try each of the possibilities in the pull-down (remember to click `OK` to apply your selection)
    - what is the difference and what could the different outputs be used for?
    - tip: **shift + u** allows you to pin sub-menus of the control panel for quick selection (e.g. the Process menu)
6. add you detected maxima to the `ROI Manager` and save to file
    - using your preferred settings, set the `Output type` to `Point Selection` and press `OK`
    - add the points to the `ROI Manager` (e.g. press `t` on your keyboard)
        - NOTE: only one ROI will be added, it contains all the points.
    - save the ROI to file (in the ROI Manager window, `More > Save`).
7. load saved ROIs from the manual detection exercise ([5.1](#manual-spot-detection-with-the-multi-point-tool)) (e.g. drag & drop on Fiji the ROIs `.zip` file)
8. compare results: how many beads do you get and how does the number compare to your manual count?

## 5.3 - Automatic spot segmentation with thresholding

1. open the `beads_001.tif` image in folder [spot_detection](../images/spot_detection.zip) (drag & drop, or `File > Open`)
2. `Image > Adjust > Threshold` (IJ:28.2.4)
    - select Otsu, then `Apply`
3. `Analyze > Set Measurements` (IJ:30.7)
    - select `Area`, `Mean gray value`, `Display label`
    - click on `OK`
4. `Analyze > Analyze Particles` (IJ:30.2)
    - select the `Overlay Masks` option in the `Show` dropdown menu
    - select `Display results`, `Clear Results`, `Summarize`, `Add to Manager`
5. save the ROIs to file (in the ROI Manager window, `More > Save`)
6. Compare results to the previous two approaches ([5.1](#manual-spot-detection-with-the-multi-point-tool) and [5.2](#algorithmic-spot-detection-with-find-maxima))
    - Do they differ significantly from each other?
    - Which performed better?

## 5.4 - Spot detection with noise

1. Repeat [5.2](#algorithmic-spot-detection-with-find-maxima) with the `with_noise_8000.tif` image in folder [spot_detection](../images/spot_detection.zip)
    - consider smoothing the image first. You can try any of the filter in the `Process > Filters` menu:
        - e.g. `Process > Filters > Gaussian Blur`, `Process > Filters > Mean`, ...
        - NOTE: the `Smooth` operation under the `Process > Smooth` is a mean filter wuth radius 1 (3x3 kernel)
2. Repeat [5.3](#automatic-spot-segmentation-with-thresholding) with the `with_noise_8000.tif` image in folder [spot_detection](../images/spot_detection.zip)
    - consider smoothing the image first. You can try any of the filter in the `Process > Filters` menu:
        - e.g. `Process > Filters > Gaussian Blur`, `Process > Filters > Mean`, ...
        - NOTE: the `Smooth` operation under the `Process > Smooth` is a mean filter wuth radius 1 (3x3 kernel)
3. Compare and comment on the performance of the two methods
    - Which one is better?
    - Why/how is it better?

## 5.5 - Spot detection with variable background

1. Repeat [5.2](#algorithmic-spot-detection-with-find-maxima) with the `beads_001_ramp.tif` image in folder [spot_detection](../images/spot_detection.zip)
2. Repeat [5.3](#automatic-spot-segmentation-with-thresholding) with the `beads_001_ramp.tif` image in folder [spot_detection](../images/spot_detection.zip)
3. Compare and comment on the performance of the two methods
    - Which one is better?
    - Why/how is it better?
4. What could be done to the image to make thresholding work better?
