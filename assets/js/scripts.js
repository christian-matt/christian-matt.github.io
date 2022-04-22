function getDOILink(doiNr) {
    document.write(', DOI: <a class="link" target="_blank" href="https://doi.org/' + doiNr + '">' + doiNr + '<i class="bi bi-box-arrow-up-right icon-link"></i></a>' )
}
function getExternalLink(name, url) {
    document.write('<a class="link" target=_blank href="' + url + '">' + name + '<i class="bi bi-box-arrow-up-right icon-link"></i></a>')
}
function getInternalLink(name, url) {
    document.write('<a class="link" href="' + url + '">' + name + '</a>')
}