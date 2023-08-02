
/*
* Collapse navbar (small screen sizes -> tablets and smartphones).
*/
function resetNavbar(){
    const element = document.getElementById("navbarSupportedContent");
    element.classList.remove("show")
    element.classList.add("collapse");
}

/*
* Set navbar toggler to default.
*/
function resetToggler() {
    const button = document.getElementById("navbar-button");
    button.blur();
}

/*
* If scroll movement is detected, collapse navbar and set navbar toggler to default.
*/
$(window).scroll(function() {
    resetNavbar();
    resetToggler();
});

/*
* If click besides navbar is detected, collapse navbar.
*/
$(window).click(function() {
    resetNavbar();
});

/*
* Collapse accordion on small screen sizes.
*/
$(document).ready(function() {
    if($(window).width() <= 580) {
        try {
            let element = document.getElementById("collapseOne");
            element.classList.remove("show")

            element = document.getElementById("accordion-button");
            element.classList.add("collapsed")
        } catch (TypeError) {}
    }
});

/*
* Set the current year in the footer.
*/
function setYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear().toString();
}

