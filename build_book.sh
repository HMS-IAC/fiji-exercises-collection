#!/bin/bash

# Build the PDF
jupyter-book build . --builder pdfhtml

# Check if the PDF build was successful
if [ $? -eq 0 ]; then
    # rename the pdf file
    mv _build/pdf/book.pdf _build/pdf/fiji-exercises-book.pdf
    echo "PDF build successful, proceeding with standard build..."
    jupyter-book build .
    # move the pdf within th html folder
    mv _build/pdf/fiji-exercises-book.pdf _build/html/fiji-exercises-book.pdf
    # delete the pdf folder
    rm -r _build/pdf
else
    echo "PDF build failed, aborting standard build."
    exit 1
fi
