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