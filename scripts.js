
// FUNCTION FOR OPEN BURGER MODAL WINDOW
function openBurgerMenu() {
    $(".burger-menu").toggleClass('active');

    if ($(".burger-menu").hasClass('active')) {
        $(".burger-modal-window").css({ "right": "0px" });
        $("body").css({ "overflow": "hidden" });
        $(".overlay-when-burger-is-open").css({ "display": "block" });
    } else {
        $(".burger-modal-window").css({ "right": "-100%" });
        $("body").css({ "overflow": "auto" });
        $(".overlay-when-burger-is-open").css({ "display": "none" });
    }
}

// CLOSE OVERLAY BY CLICKING ON OVERLAY
function closeOverlayForBurger() {
    $(".burger-modal-window").css({ "right": "-100%" });
    $("body").css({ "overflow": "auto" });
    $(".overlay-when-burger-is-open").css({ "display": "none" });

    $(".burger-menu").removeClass("active");
}