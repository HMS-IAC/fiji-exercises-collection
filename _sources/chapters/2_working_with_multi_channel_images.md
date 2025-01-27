# 2 - Working with Multi-Channel Images

## 2.1 - Composite images - channels display, splitting and merging

1. `File > Open Samples > Fluorescent Cells` (IJ:26.4)
2. `Image > Color > Channels Tool` (IJ:28.7.5)
3. toggle the `Channel` checkboxes to show/hide the respective channel
4. change the dysplay mode:
    - using the dropdown menu, switch between `Composite`, `Color` and `Grayscale` modes and observe the changes in the image display
5. select back the `Composite` dysplay mode
6. `Image > Color > Arrange Channels`
    - click on `New 1`, and select `Magenta` to change the LUT of the first channel
7. re-arrange the order of the channels:
    - in the `New channel order` settings, modify the order of the channels by changing the order of the `123` numbers (e.g. 213)
    - click `OK` to apply the changes
8. split channels
    - `Image > Color > Split Channels` (IJ:28.5.1)
9. merge channels to composite
    - `Image > Color > Merge Channels` (IJ:28.5.2)
    - check `create composite` checkbox (IJ:28.5.2)
10. LUT (look-up table) (IJ:19.17 & IJ: 28.15)
    - change `LUT` of the channels (`LUT` in the `startup tools` or `Image > Lookup Tables`)
11. color blindness
    - convert to RGB Color: `Image > Type > RGB Color` (IJ:7)
    - `Image > Color > Simulate Color Blindness`
    - `Image > Color > Dichromacy`

## 2.2 - RGB images - replace red with magenta

1. `File > Open Samples > Fluorescent Cells` (IJ:26.4)
2. convert to RGB Color: `Image > Type > RGB Color` (IJ:7)
3. `Image > Color > Replace Red with Magenta`
