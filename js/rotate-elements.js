
// ROTATE ELEMENTS IN 1 SECTION
function rotateAllElements() {
    $(".element, .rhomb-1, .rhomb-2").each(function() {
        rotate($(this));
    });
}

// Rotate each element
function rotate(e) {
    let i = 4;
    setInterval(function() {
        $(e).css({ "rotate": "" + i + "deg" });
        i = i + 4;
    }, 70);
}

// Start funtion when document loads
$(document).ready(rotateAllElements());