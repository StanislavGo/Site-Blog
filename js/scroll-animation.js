function showNameAndProfessionsFirstSection() {
    $(".name-and-surname").addClass("active");
    $(".who-I-am").addClass("active");
}

function showPhotoFromFirstSection() {
    $(".photo-with-man").css({ 
        "transform": "translate(0px, 0px)", 
        "opacity": "1"});
}

function showHeader() {
    $(".header").css({ 
        "transform": "translate(0px, 0px)",
        "opacity": "1"
     });
}

function showElements() {
    $(".element").addClass("active");
}

$(document).ready(function() {
    showNameAndProfessionsFirstSection();
    showPhotoFromFirstSection();
    showHeader();
    showElements();
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Scroll animation
$("a[href*='#']").click(function() {
    let _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top });
    return false
})