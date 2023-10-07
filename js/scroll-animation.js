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
    checkIfElementHasClassShow();
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function rejectAllChoseClasses() {
    let elements = document.querySelectorAll(".choose");
    elements.forEach(e => {
        e.classList.remove("choose");
    })
}

// Function to show which section is choosen
function checkIfElementHasClassShow() {
    rejectAllChoseClasses();
    if (document.querySelector(".homeForCheck").classList.contains("show")) {
        document.querySelector('#home1').className = "choose";
    }
    if (document.querySelector(".experienceCheck").classList.contains("show")) {
        document.querySelector('#skills1').className = "choose";
    }
    if (document.querySelector(".projectsForCheck").classList.contains("show")) {
        document.querySelector("#projectsForCheck").className = "choose";
    }
    if (document.querySelector(".clientsForCheck").classList.contains("show")) {
        document.querySelector("#clientsForCheck").className = "choose";
    }
    if (document.querySelector(".FAQForCheck").classList.contains("show")) {
        document.querySelector("#FAQForCheck").className = "choose";
    }
    if (document.querySelector(".contactForCheck").classList.contains("show")) {
        document.querySelector("#contactForCheck").className = "choose";
    }
    if (document.querySelector(".blogForCheck").classList.contains("show")) {
        document.querySelector("#blogForCheck").className = "choose";
    }
}

console.log(document.querySelector(".experience-block.hidden"));

// Scroll animation
$("a[href*='#']").click(function() {
    let _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top });
    return false
})