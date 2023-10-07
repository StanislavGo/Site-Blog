
// FUNCTION FOR OPEN BURGER MODAL WINDOW
function openBurgerMenu() {
    $(".burger-menu").toggleClass('active');
    $(".burger-modal-window .nav_block").toggleClass("active");

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
    $(".nav_block").removeClass("active");
}

//Function for open View all

function openViewAll() {
    $(".view_btn-img").addClass('active');
    $(".view_all").css({ "display": "block" });
}

function closeViewAll() {
    $(".view_btn-img.active").removeClass('active');
    $(".view_all").css({ "display": "none" });
}

function closeBurgerMenu() {
    closeOverlayForBurger();
}