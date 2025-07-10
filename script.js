$(document).ready(function() {
    const sections = ['main', 'services', 'works'];

    $(".mainBtn, .servicesBtn, .backagesBtn, .worksBtn").click(function() {
        const section = this.className.match(/(\w+)Btn/)[1];
        const $section = $("." + section);

        if ($section.is(":visible")) {
            // If already visible, hide it and remove active class
            $section.fadeOut(600).removeClass("active");
            $(this).find('.nav-link').removeClass("active");
        } else {
            // Hide all, then show the selected one
            sections.forEach(function(sec) {
                $("." + sec).fadeOut(200).removeClass("active");
            });
            $section.fadeIn(600).addClass("active");
            $(".toggleBtn").removeClass("active");
            $(this).find('.nav-link').addClass("active");
        }
    });
});
