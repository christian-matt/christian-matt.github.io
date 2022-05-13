function getDOILink(doiNr, style_class = 'publication-item') {
    let doiLink = doiNr.replace('&shy;', '')
    document.write(', DOI: <a class="' + style_class +'" target="_blank" href="https://doi.org/' + doiLink + '">' + doiNr +
        '<i class="bi bi-box-arrow-up-right icon-link"></i></a>')
}
function getExternalLink(name, url) {
    document.write('<a class="link" target=_blank href="' + url + '">' + name + '<i class="bi bi-box-arrow-up-right icon-link"></i></a>')
}
function getInternalLink(name, url) {
    document.write('<a class="link" href="' + url + '">' + name + '</a>')
}