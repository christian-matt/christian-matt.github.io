function linkFormatter(link, label, doi = false, accordion = false) {
    let classString = (accordion) ? ("link accordion-list-item") : ("link")

    if (doi) {
        return(
            ', DOI: <a class="' + classString + '" target="_blank" href="https://doi.org/' + link + '">' + label + '<i class="bi bi-box-arrow-up-right icon-link"></i></a>'
        )
    } else {
        return(
            '<a class="' + classString + '" target="_blank" href="' + link + '">' + label + '<i class="bi bi-box-arrow-up-right icon-link"></i></a>'
        )
    }
}

