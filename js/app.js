
const navSlide = () => {
    const burguer = document.querySelector(".burguer");
    const nav = document.querySelector(".nav-links");
    //When hamburguer icon click
    burguer.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

function createGallery(){
    const gallery = document.querySelector('.gallery-images');

    //Repeat 12 times
    for(let i = 1; i<=12; i++){
        const image = document.createElement('picture');
        //Add source image and properties to mini picture
        image.innerHTML = `
        <source srcset="./img/galeria${i}.jpg" type="image/jpg">
        <img loading="lazy" width="185" height="100" src="./img/galeria${i}.jpg" alt="gallery image">
    `;
    //When an image is clicked
    image.addEventListener("click", () => {
        showImage(i);
    });

    //Adding each picture to unordered list
    gallery.appendChild(image);
    }
}

function showImage(id) {
    const image = document.createElement('picture');
        //Add source image and properties to mini picture
        image.innerHTML = `
        <source srcset="./img/galeria${id}.jpg" type="image/jpg">
        <img loading="lazy" width="500" height="500" src="./img/galeria${id}.jpg" alt="gallery image">
    `;

    //Create overlay with image clicked
    const overlay = document.createElement('DIV');
    overlay.appendChild(image);
    overlay.classList.add('overlay');

    //Remove overlay when overlay is clicked
    overlay.addEventListener("click", () => {
        const body = document.querySelector('body');
        body.classList.remove('fixed');
        overlay.remove();
    });

    //Overlay close button
    const closeOverlay = document.createElement('I');
    closeOverlay.classList.add('fas');
    closeOverlay.classList.add('fa-times-circle');
    overlay.appendChild(closeOverlay);

    closeOverlay.addEventListener("click", () => {
        //Allow scroll when image isn't viewing
        const body = document.querySelector('body');
        body.classList.remove('fixed');
        //Remove overlay when close button is clicked
        overlay.remove();
    });

    //Add overlay to HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
     //Don't allow scroll when image viewing
    body.classList.add('fixed');
}



navSlide();
createGallery();