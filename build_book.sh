!/bin/bash

# Build the PDF
jupyter-book build . --builder pdfhtml

# Check if the PDF build was successful
if [ $? -eq 0 ]; then
    echo "PDF build successful, proceeding with standard build..."
    jupyter-book build .
    # move the pdf folder to the html folder
    mv _build/pdf/ _build/html/pdf/
    # rename the pdf file
    mv _build/html/pdf/book.pdf _build/html/pdf/fiji-exercises-book.pdf
else
    echo "PDF build failed, aborting standard build."
    exit 1
fi