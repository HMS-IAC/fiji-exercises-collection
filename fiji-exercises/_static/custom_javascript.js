// Download images on click when linked in the markdown( e.g. [single_channel.tif](images/single_channel.tif))
document.addEventListener('DOMContentLoaded', function () {
    // Select all images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default click behavior (opening the image)
            const link = document.createElement('a');
            link.href = img.src; // Set the image source as the download URL
            link.download = img.src.split('/').pop(); // Use the image file name for download
            link.click(); // Programmatically click the link to trigger download
        });
    });
});