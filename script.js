// SMOOTH SCROLL

function scrollToSection(id){

    document.getElementById(id).scrollIntoView({

        behavior:"smooth"

    });

}

// CONTACT FORM

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    form.reset();

});

// IMAGE MODAL

const modal = document.getElementById("imageModal");

const modalImg = document.getElementById("modalImg");

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img => {

    img.addEventListener("click", function(){

        modal.style.display = "block";

        modalImg.src = this.src;

    });

});

// CLOSE MODAL

const closeBtn = document.querySelector(".close");

closeBtn.onclick = function(){

    modal.style.display = "none";

};

window.onclick = function(event){

    if(event.target == modal){

        modal.style.display = "none";

    }

};
// DOCUMENT DETAILS TOGGLE

const readButtons = document.querySelectorAll(".read-btn");

readButtons.forEach(button => {

    button.addEventListener("click", () => {

        const details = button.nextElementSibling;

        if(details.style.display === "block"){

            details.style.display = "none";

            button.innerText = "Read More";

        }

        else{

            details.style.display = "block";

            button.innerText = "Show Less";

        }

    });

});

// ACTIVE NAVBAR

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});