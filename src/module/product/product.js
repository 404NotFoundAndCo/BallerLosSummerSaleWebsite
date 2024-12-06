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
}

// Automatically select the first image on load
window.onload = function() {
    changeImage('FingerabdruckRecherche.png');
};