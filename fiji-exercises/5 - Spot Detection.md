# 5 - Spot Detection

<!-- old
8.1 manual spot detection
8.2 algorithmic spot detection
8.3 automatic spot detection with thresholding
8.4. ... with noise
8.5. ... with variable background  -->

## 5.1 - Manual spot detection with the Multi-point Tool

1. read all the next steps before beginning
2. open spot_detection/beads_001.tif
3. right-click (ctrl-click) on the Point Tool in the tool bar and select Multi
Tool
4. double-click on the Point Tool in the tool-bar and customize to your
liking (test on image, clear points by shift-a)
5. count all beads by clicking on them one by one
6. how long did it take you to click on all the beads (measure with stopwatch
the time it took to complete the previous step)?
7. save results to the ROI Manager (t) then to file (More » Save . . . )
8. click measure in the ROI Manager to get number of spots

## 5.2 - Algorithmic spot detection with Find Maxima

useful [Find Maxima info](https://forum.image.sc/t/new-maxima-finder-menu-in-fiji/25504)

1. open the [beads_001.tif](images/spot_detection/beads_001) image in folder `spot_detection`(drag & drop, or `File > Open`)
2. `Process > Find Maxima`
3. check `Preview point selection`
4. try different values for `Prominence` and the three checkboxes
5. try each of the possibilities in the pull-down (remember to click `OK` to apply your selection)
    - what is the difference and what could the different outputs be used for?
    - tip: **shift + u** allows you to pin sub-menus of the control panel for quick selection (e.g. the Process menu)
6. add you detected maxima (Point Selection) to the ROI Manager
and save to file
7. load saved ROIs from the manual detection exercise and compare results
• how many beads do you get and how does the number compare to
your manual count?

## 5.3 - Automatic spot segmentation with thresholding

1. open spot_detection/beads_001.tif
2. Image > Adjust > Threshold ...
• select Otsu, then apply
3. Analyze > Set Measurements ...
+ [X] Area
+ [X] Mean gray value
+ [X] Display label
4. Analyze > Analyze Particles ...
+ Show: Overlay Masks
+ [X] Display results
+ [X] Clear Results
+ [X] Summarize
+ [X] Add to Manager
31 OF 49
IMAGE ANALYSIS COLLABORATORY OCTOBER 10, 2024
5. save ROIs to file
6. Compare results to the previous two approaches
• Do they differ significantly from each other?
• Which performed better?

## 5.4 - Spot detection with noise

1. Repeat 8.2 with with_noise_8000.tif
• consider smoothing the image first:
– Process > Smooth (this is a 3x3 mean filter)
2. Repeat 8.3 with with_noise_8000.tif
• consider smoothing the image first:
– Process > Filters
– then pick one
3. Compare and comment on the performance of the two methods
• Which one is better?
• Why/how is it better?

## 5.5 - Spot detection with variable background

1. Repeat 8.2 with beads_001_ramp.tif
2. Repeat 8.3 with beads_001_ramp.tif
3. Compare and comment on the performance of the two methods
• Which one is better?
• Why/how is it better?
4. What could be done to the image to make thresholding work better?

