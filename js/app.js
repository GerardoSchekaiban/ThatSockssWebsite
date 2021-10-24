const navSlide = () => {
    const burguer = document.querySelector(".burguer");
    const nav = document.querySelector(".nav-links");

    burguer.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

function createGallery(){
    const gallery = document.querySelector('.gallery-images');

    for(let i = 1; i<=12; i++){
        const image = document.createElement('picture');
        image.innerHTML = `
        <source srcset="./img/galeria${i}.jpg" type="image/jpg">
        <source srcset="./img/galeria${i}.jpg" type="image/jpg">
        <img loading="lazy" width="200" height="300" src="./img/galeria${i}.jpg" alt="gallery image">
    `;

        gallery.appendChild(image);
    }
}

navSlide();
createGallery();