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


$(document).ready(function() {
    $(".toggleButton").click(function() {
        var target = $(this).data("target");
        // Hide all sections
        $(".bromosVid, .reelsVid").fadeOut(200).removeClass("active");
        // Show the selected section
        $(target).fadeIn(600).addClass("active");
        // Remove 'active' from all buttons, add to the clicked one
        $(".toggleButton").removeClass("active");
        $(this).addClass("active");
    });
});



