const images = [
    'images/tire-gallery-1.jpeg',
    'images/tire-gallery-2.jpeg',
    'images/tire-gallery-3.jpeg',
    'images/tire-gallery-4.jpeg',
    'images/tire-gallery-5.jpeg',
    'images/tire-gallery-6.jpeg',
    'images/tire-gallery-7.jpeg',
    'images/tire-gallery-8.jpeg'
];
 
let currentIndex = 0;
 
function openLightbox(index) {
    currentIndex = index;
    document.getElementById('lightbox-img').src = images[index];
    document.getElementById('lightbox-counter').textContent = (index + 1) + ' / ' + images.length;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}
 
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}
 
function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById('lightbox-img').src = images[currentIndex];
    document.getElementById('lightbox-counter').textContent = (currentIndex + 1) + ' / ' + images.length;
}
 
// Close on background click
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
});
 
// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (!document.getElementById('lightbox').classList.contains('active')) return;
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
    if (e.key === 'Escape') closeLightbox();
});