# 2 - Working with Multi-Channel Images

## 2.1 - composite images - splitting and merging

1. `File > Open Samples > Fluorescent Cells` (IJ:26.4)
2. `Image > Color > Arrange Channels`
    - click on `New 1`, and select `Magenta`
3. split channels
    - `Image > Color > Split Channels` (IJ:28.5.1)
4. merge channels to composite
    - `Image > Color > Merge Channels` (IJ:28.5.2)
    - check `create composite` checkbox (IJ:28.5.2)
5. LUT (look-up table)
    - change `LUT` of the channels (`LUT` in the `startup tools` or `Image > Lookup Tables`)
6. color blindness
    - convert to RGB Color: `Image > Type > RGB Color` (IJ:7)
    - `Image > Color > Simulate Color Blindness`
    - `Image > Color > Dichromacy`
