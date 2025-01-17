#!/bin/bash

# Build the PDF
jupyter-book build . --builder pdfhtml

# Check if the PDF build was successful
if [ $? -eq 0 ]; then
    echo "PDF build successful, proceeding with standard build..."
    jupyter-book build .
else
    echo "PDF build failed, aborting standard build."
    exit 1
fi
