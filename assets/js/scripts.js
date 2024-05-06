
/*
* Loads Google Maps centered on IWI.
*/
function loadGoogleMaps() {
    //remove consent buttons
    $('.consent-form').remove();

    // load map
    let map = document.createElement('iframe');
    map.src = 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJITeQkZU5jkcRlMn9N-tL7xE&key=AIzaSyCvO97-2YNPsZ1r2Q6YttgESTUahpGBsNc&zoom=17'
    map.id = 'map'
    map.allowFullscreen = true
    map.loading = 'lazy'
    map.title = 'Map'
    map.referrerPolicy = 'no-referrer'
    document.getElementById("map-container").append(map);
}

/*
* Collapse navbar (small screen sizes -> tablets and smartphones).
*/
function resetNavbar(){
/*    const element = document.getElementById("navbarText");
    element.classList.add("collapsing");
    element.classList.add("collapse");
    element.classList.remove("show")*/
    const navLinks = document.querySelectorAll('.nav-item')
    const menuToggle = document.getElementById('navbarText')
    console.log(navLinks)
    console.log(menuToggle)
    if (menuToggle.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(menuToggle)
        navLinks.forEach(() => bsCollapse.hide());
    }
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
$(document).scroll(function() {
    console.log("scroll")
    resetNavbar();
    resetToggler();
});

/*
* If click besides navbar is detected, collapse navbar.
*/
$(document).click(function() {
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

