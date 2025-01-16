document.addEventListener('DOMContentLoaded', function () {
    // Handle Markdown image links
    // Download images on click when linked in the markdown( e.g. [single_channel.tif](images/single_channel.tif))
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default click behavior (opening the image)
            const imageName = img.src.split('/').pop();
            if (imageName === 'iac_logo_white.png') {
                window.location.href = 'https://iac.hms.harvard.edu'; // Navigate to the specified website
                return; // Exclude download if the image is named "iac_logo_white"
            }
            if (imageName === 'badge.svg') {
                window.location.href = 'https://jupyterbook.org'; // Navigate to Jupyter Book website
                return; // Exclude download if the image is named "badge.svg"
            }
            if (imageName === 'License-CC_BY_4.0-blue.svg') {
                window.location.href = 'https://creativecommons.org/licenses/by/4.0/'; // Navigate to CC BY 4.0 license
                return; // Exclude download if the image is named "blue.svg"
            }
            if (imageName === 'PDF-Download-blue.svg') {
                window.location.href = '_build/pdf/book.pdf'; // Navigate to PDF download
                return; // Exclude download if the image is named "blue"
            }
            const link = document.createElement('a');
            link.href = img.src; // Set the image source as the download URL
            link.download = imageName; // Use the image file name for download
            link.click(); // Programmatically click the link to trigger download
        });
    });

    // Handle Markdown folder links
    const markdownLinks = document.querySelectorAll('a');
    markdownLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const href = link.getAttribute('href');
            if (href && href.endsWith('.zip')) {
                event.preventDefault(); // Prevent navigation to the folder
                const downloadLink = document.createElement('a');
                downloadLink.href = href; // Set the href as the download URL
                downloadLink.download = href.split('/').pop(); // Use the file name for download
                downloadLink.click(); // Programmatically click the link to trigger download
            }
        });
    });
});