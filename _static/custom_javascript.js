document.addEventListener('DOMContentLoaded', function () {
    // Handle Markdown folder links, images and PDFs
    const markdownLinks = document.querySelectorAll('a');
    markdownLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const href = link.getAttribute('href');
            if (href) {
                if (href.endsWith('.pdf')){
                    event.preventDefault(); // Prevent navigation to the folder
                    const downloadLink = document.createElement('a');
                    downloadLink.href = href; // Set the href as the download URL
                    downloadLink.download = href.split('/').pop(); // Use the file name for download
                    downloadLink.click(); // Programmatically click the link to trigger download
                }
                if (href.endsWith('.tif' || '.tiff' || '.png' || '.jpg' || '.jpeg')){
                    event.preventDefault(); // Prevent navigation to the folder
                    const downloadLink = document.createElement('a');
                    downloadLink.href = href; // Set the href as the download URL
                    downloadLink.download = href.split('/').pop(); // Use the file name for download
                    downloadLink.click(); // Programmatically click the link to trigger download
                }
                if (href.endsWith('.zip')){
                    event.preventDefault(); // Prevent navigation to the folder
                    const downloadLink = document.createElement('a');
                    downloadLink.href = href; // Set the href as the download URL
                    downloadLink.download = href.split('/').pop(); // Use the file name for download
                    downloadLink.click(); // Programmatically click the link to trigger download
                }
            }
        });
    });
});
