document.addEventListener('DOMContentLoaded', function () {
    // handle Markdown links to download of files with specified extensions
    const markdownLinks = document.querySelectorAll('a');
    markdownLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const href = link.getAttribute('href');
            if (href) {
                const fileExtensions = ['.pdf', '.tif', '.tiff', '.png', '.jpg', '.jpeg', '.zip'];
                if (fileExtensions.some(ext => href.endsWith(ext))) {
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
