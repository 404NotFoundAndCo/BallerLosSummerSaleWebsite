const images = [
    './Images/3dDrucker.png',
    './Images/Produkt1.bmp',
    './Images/Produkt2.bmp'
]

let currentIndex = 0;

function changeImage(src) {
    const mainImage = document.getElementById('current-image');
    const previews = document.querySelectorAll('.preview');

    // Update main image source
    mainImage.src = src;
    // Update active preview border
    previews.forEach(preview => preview.classList.remove('active'));
    const activePreview = Array.from(previews).find(preview => preview.src.includes(src));
    if (activePreview) {
        activePreview.classList.add('active');
    }

    currentIndex = images.indexOf(src)
}

function toImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Loop back to last image
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Loop back to first image
    }

    changeImage(images[currentIndex])
}

