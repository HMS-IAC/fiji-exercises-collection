!/bin/bash

# Build the PDF
jupyter-book build . --builder pdflatex

# Check if the PDF build was successful
if [ $? -eq 0 ]; then
    echo "PDF build successful, proceeding with standard build..."
    # move the pdf folder to the data folder
    mv _build/latex/python.pdf data/fiji-exercises-book.pdf
    # remove the pdf folder
    rm -r _build/latex/
    # build the standard html book
    jupyter-book build .
else
    echo "PDF build failed, aborting standard build."
    exit 1
fi