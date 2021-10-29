
function navSlide(){
    const burguer = document.querySelector(".burguer");
    const nav = document.querySelector(".nav-links");
    const body = document.querySelector('body');
    //When hamburguer icon click
    burguer.addEventListener("click", () => {
        nav.classList.toggle("active");
        //Don't allow scroll when menu is viewing
        body.classList.toggle('fixed');
    });
}

function navFixed(){
    const nav = document.querySelector('.nav');
    const bestSellers = document.querySelector('.products');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function(){
        //When best sellers section top touch window top
        if(bestSellers.getBoundingClientRect().top<0){
            nav.classList.add('nav-fixed');
            nav.classList.add('nav-opacity');
            body.classList.add('body-scroll');
        }else{
            nav.classList.remove('nav-fixed');
            nav.classList.remove('nav-opacity');
            body.classList.remove('body-scroll');
        }
    });
}

function createGallery(){
    const gallery = document.querySelector('.gallery-images');

    //Repeat 12 times
    for(let i = 1; i<=12; i++){
        const image = document.createElement('picture');
        //Add source image and properties to mini picture
        image.innerHTML = `
        <img width="185" height="100" src="./img/galeria${i}.jpg" alt="gallery image">
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
        //Add source image and properties to big picture
        image.innerHTML = `
        <img width="500" height="500" src="./img/galeria${id}.jpg" alt="gallery image">
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

function ScrollNav(){
    //Links
    const links = document.querySelectorAll('.nav-links a');
    //For each link
    links.forEach(link => {
        link.addEventListener('click', function(e){
            //Remove default behavior
            e.preventDefault();

            //Link section clicked
            const linkClicked = e.target.attributes.href.value;
            const section = document.querySelector(linkClicked);
            //Apply smooth behavior
            section.scrollIntoView({behavior: "smooth"});

            //Allow scroll after link is clicked
            const body = document.querySelector('body');
            body.classList.remove('fixed');

            //Close menu after link is clicked
            const nav = document.querySelector(".nav-links");
            nav.classList.remove("active");   
        })
    })
}


navSlide();
navFixed();
createGallery();
ScrollNav();