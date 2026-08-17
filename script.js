const images = document.querySelectorAll('.image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(image => {

    image.addEventListener('click', () => {

        lightbox.style.display = 'flex';

        lightboxImg.src = image.src;

    });

});

lightbox.addEventListener('click', () => {

    lightbox.style.display = 'none';

});
const topBtn = document.querySelector('.top-btn');

window.addEventListener('scroll', () => {

    if (window.scrollY > 200) {

        topBtn.style.display = 'block';

    } else {

        topBtn.style.display = 'none';

    }

});
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function () {
        this.blur();
    });
});
