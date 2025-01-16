# 4 - Segmentation

## 4.1 - DAPI segmentation with thresholding


1. open the [DAPI.tif](../images/DAPI.tif) image (drag & drop, or `File > Open`)
2. change `LUT` to Grays
3. `Image > Duplicate` (IJ:28.9) (**shift + d**)
4. `Image > Adjust > Threshold` (IJ:28.2.4)
5. understand the function of the `Dark Background` checkbox (inspect pixel values)
6. try setting sliders manually. Can you find a good threshold range?
7. try different algorithms by selecting them in the left dropdown menu. Can you find one that gives a good result?
    - NOTE: `Image > Adjust > Auto Threshold`, if you want to see all at the same time
8. try different display options (`Red`, `B&W`, `Over/Under`) by selecting them in the right dropdown menu, do you understand what they show?
9. when happy with result, click `Apply`
10. save the resulting binary image: `File > Save As > Tiff`
11. apply watershed to divide touching objects
    - select the binary image
    - `Process > Binary > Watershed`
12. proceed with `Analyze > Analyze Particles` (IJ:30.2)
    - select `Exclude on Edges` and `Add to Manager`
    - click on `OK`
13. bonus: repeat step 12 but use the `Size` and `Circularity` options to try to exclude some particles and the `Show` dropdown menu to visualize different outputs.
14. set the parameters you want to measure:
    - `Analyze > Set Measurement` (IJ:30.2)
    - select `Area`, `Mean gray value`, `Min & max gray value`, `Display label`
    - click on `OK`
15. select the original image (open it again as in step 1 if you do not have it)
16. in the `ROI Manager`, click on `Deselect` and then on `Measure`
17. save the `Results` table as .csv: select the table and click on `File > Save As`

## 4.2 - DAPI segmentation with filters and thresholding

1. open the [DAPI_noise.tif](../images/DAPI_noise.tif) image (drag & drop, or `File > Open`)
2. change LUT to Grays
3. `Image > Duplicate` (IJ:28.9) (**shift + d**)
4. `Image > Adjust > Threshold` (IJ:28.2.4)
5. understand the function of the `Dark Background` checkbox (inspect pixel values)
6. try setting sliders manually. Can you find a good threshold range?
7. try different algorithms by selecting them in the left dropdown menu. Can you find one that gives a good result?
    - NOTE: `Image > Adjust > Auto Threshold`, if you want to see all at the same time
8. apply a filter of your choice (`Mean`, `Gaussian Blur`, `Median`, ...)
    - `Process > Filters`
    - check the `Preview` checkbox
    - change the `Radius` / `Sigma`. What happens to the image?
    - when you are happy, click on `OK`
9. repeat steps 3, 7 and 8 until happy with result, then click `Apply`
10. save the resulting binary image: `File > Save As > Tiff`
11. apply watershed to divide touching objects
    - select the binary image
    - `Process > Binary > Watershed`
12. proceed with `Analyze > Analyze Particles` (IJ:30.2)
    - select `Exclude on Edges` and `Add to Manager`
    - click on `OK`
13. bonus: repeat step 12 but use the `Size` and `Circularity` options to try to exclude some particles and the `Show` dropdown menu to visualize different outputs.
14. set the parameters you want to measure:
    - `Analyze > Set Measurement` (IJ:30.2)
    - select `Area`, `Mean gray value`, `Min & max gray value`, `Display label`
    - click on `OK`
15. select the original image (open it again as in step 1 if you do not have it)
16. in the `ROI Manager`, click on `Deselect` and then on `Measure`
17. save the `Results` table as .csv: select the table and click on `File > Save As`

## 4.3 - DAPI segmentation with Weka

1. open the [hela.tif](../images/hela.tif) image (drag & drop, or `File > Open`)
2. change `LUT` to Grays
3. `Plugins > Segmentation > Trainable Weka Segmentation`
4. draw a line outside a nucleus
5. click `Add to class 1`
6. draw a line inside a nucleus
7. click `Add to class 2`
8. click `Train classifier`
9. repeat the last four steps until happy with result
10. click `Get probability`
11. inspect the probability maps, do you understand the meaning of the values of the pixels in the different channels?
12. click `Create result`
13. inspect results, do you understand the meaning of the values of the pixels in the different channels?
    - you now have a binary image, but not the kind Fiji likes
    - to measure, proceed by thresholding (“set” both threshold values to 1), then Analyze Particles, etc
    - alternatively, multiply all values in the Weka output image by 255, then apply Binarize, etc
14. save the resulting image with name “myWekaHeLa1.tif”: `File > Save As > Tiff`
15. bonus round: play with `Settings`
