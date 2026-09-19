$('#pastShows').on('shown.bs.collapse', function () {
    this.scrollIntoView();
});

$('#navbarSupportedContent .nav-link').on('click', function () {
    if ($('.navbar-toggler').is(':visible')) {
        bootstrap.Collapse.getOrCreateInstance(document.getElementById('navbarSupportedContent'), { toggle: false }).hide();
    }
});