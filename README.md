# Fiji Exercises Collection

This is a collection of exercises for the open-source [Fiji](https://fiji.sc/) software.

The exercises are designed to be used in a classroom setting, but can also be used for self-study. The exercises are divided into sections, each of which covers a different aspect of Fiji.

## To use it:
- Clone this repository.
- Create a fresh environment and install:
    - [jupyter-book](https://jupyterbook.org/en/stable/start/overview.html#install-jupyter-book): `pip install jupyter-book`.
    - pyppeteer (for [PDF conversion](https://jupyterbook.org/en/stable/advanced/pdf.html#build-a-pdf)): `pip install pyppeteer`.
- Run `jb build fiji-exercises` in the root directory of the repository to build the exercises as html.
    - a `_build/html` directory will be created in the `fiji-exercises` directory; inside you can find the html files that you can open in a browser.
- After the steps above, to create a `pdf` version:
    - run `jb build fiji-exercises --builder pdfhtml` in the root directory of the repository. After a `_build/pdf` directory will be created in the `fiji-exercises` directory; inside you can find the pdf file.