document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const currentImage = document.getElementById('currentImage');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    let currentIndex = 0;

    console.log(galleryImages);
    console.log(currentImage);
    console.log(nextButton);
    console.log(prevButton);

    if (galleryImages.length === 0) {
        console.error("No gallery images found!");
    }

    // Function to update the current enlarged image
    function updateCurrentImage(index) {
        currentIndex = index;
        currentImage.src = galleryImages[currentIndex].src;
    }

    // Initial image setting
    updateCurrentImage(currentIndex);

    // Click event for the gallery images
    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            updateCurrentImage(index);
        });
    });

    // Navigation buttons
    nextButton.addEventListener('click', () => {
        console.log("Next button clicked");
        if (currentIndex < galleryImages.length - 1) {
            updateCurrentImage(currentIndex + 1);
        } else {
            updateCurrentImage(0);
        }
    });

    prevButton.addEventListener('click', () => {
        console.log("Previous button clicked");
        if (currentIndex > 0) {
            updateCurrentImage(currentIndex - 1);
        } else {
            updateCurrentImage(galleryImages.length - 1);
        }
    });
});