# 3 - Image Processing: Filters

## 3.1 - Edge filters - vertical stripes

1. open the [vertical_stripes.tif](../data/vertical_stripes.tif) image (drag & drop, or `File > Open`)
2. `Image > Duplicate` (IJ:28.9) (**shift + d**)
3. apply horizontal Prewitt filter:
    - `Process > Filters > Convolve`
    - as kernel input (Prewitt):

    ```plaintext
    -1 -1 -1
     0  0  0
     1  1  1
    ```

    - click on `OK`.
    - do you understand the output of this process?
4. select the original `vertical_stripes.tif` image and duplicate it again.
    - `Image > Duplicate` (IJ:28.9) (**shift + d**)
5. apply vertical Prewitt filter:
    - `Process > Filters > Convolve`
    - as kernel input (Prewitt):

    ```plaintext
    -1  0  1
    -1  0  1
    -1  0  1
    ```

    - click on `OK`.
    - do you understand the output of this process?

## 3.2 - Edge filters - horizontal stripes

The steps in this exercise are identical to [3.1](#edge-filters-vertical-stripes), only the input image differs.

1. open the [horizontal_stripes.tif](../data/horizontal_stripes.tif) image (drag & drop, or `File > Open`)
2. `Image > Duplicate` (IJ:28.9) (**shift + d**)
3. apply horizontal Prewitt filter:
    - `Process > Filters > Convolve`
    - as kernel input (Prewitt):

    ```plaintext
        -1 -1 -1
        0 0 0
        1 1 1
    ```

    - click on `OK`.
    - do you understand the output of this process?
4. select the original `vertical_stripes.tif` image and duplicate it again.
    - `Image > Duplicate` (IJ:28.9) (**shift + d**)
5. apply vertical Prewitt filter:
    - `Process > Filters > Convolve`
    - as kernel input (Prewitt):

    ```plaintext
    -1  0  1
    -1  0  1
    -1  0  1
    ```

    - click on `OK`.
    - do you understand the output of this process?

## 3.3 - Edge filters - checkerboard

The steps in this exercise are identical to [3.1](#edge-filters-vertical-stripes) and [3.2](#edge-filters-horizontal-stripes) only the input image differs.

1. open the [checkerboard.tif](../data/checkerboard.tif) image (drag & drop, or `File > Open`)
2. `Image > Duplicate` (IJ:28.9) (**shift + d**)
3. apply horizontal Prewitt filter:
    - `Process > Filters > Convolve`
    - as kernel input (Prewitt):

    ```plaintext
        -1 -1 -1
        0 0 0
        1 1 1
    ```

    - click on `OK`.
    - do you understand the output of this process?
4. select the original `checkerboard.tif` image and duplicate it again.
    - `Image > Duplicate` (IJ:28.9) (**shift + d**)
5. apply vertical Prewitt filter:
    - `Process > Filters > Convolve`
    - as kernel input (Prewitt):

    ```plaintext
    -1  0  1
    -1  0  1
    -1  0  1
    ```

    - click on `OK`.
    - do you understand the output of this process?

## 3.4 - Morphological filters - Binary

1. open the [exercise_morphology.tif](../data/exercise_morphology.tif) image (drag & drop, or `File > Open`)
2. duplicate the image 4 times and name each copy as follow:
    - Eroded
    - Dilated
    - Closed
    - Opened
3. apply binary morphological filters:
    - `Process > Binary` (Erode, Dilate, Close, Open)
    - Note: Make sure you apply the operation that corresponds to the name of each image.
4. report findings

## 3.5 - Morphological filters - Gray

1. open the [exercise_morphology.tif](../data/exercise_morphology.tif) image (drag & drop, or `File > Open`)
2. apply Gray Morphological filters:
    - `Process > Morphology > Gray Morphology`
3. apply image **opening** with **circular** structuring element with **radius 3** - removes noise
4. Report: did it get rid of the noise?
5. apply image **opening** with **circular** structuring element with **radius 5**
6. report: did it get rid of the tentacles from the top-left object?
7. with the line tool (IJ:19.2.1), measure the diameter of the holes in the bottom-right object.
8. apply image **closing** with **circular** structuring element with **radius slightly larger than the measured radius** (diameter/2).
9. report: did it get rid of the tentacles from the top-left circle?
