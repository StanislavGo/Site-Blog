$(document).ready(function() {
    showNameAndProfessionsFirstSection();
    showPhotoFromFirstSection();
});

function showNameAndProfessionsFirstSection() {
    $(".name-and-surname").addClass("active");
    $(".who-I-am").addClass("active");
}

function showPhotoFromFirstSection() {
    $(".photo-with-man").css({ 
        "transform": "translate(0px, 0px)", 
        "opacity": "1"});
}
