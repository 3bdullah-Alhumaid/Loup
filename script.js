$(document).ready(function() {
    // Map button classes to section classes
    const sections = ['main', 'services', 'backages', 'works'];

    $(".mainBtn, .servicesBtn, .backagesBtn, .worksBtn").click(function() {
        // Get the section name from the button class (e.g., mainBtn -> main)
        const section = this.className.match(/(\w+)Btn/)[1];

        sections.forEach(function(sec) {
            if (sec === section) {
                $(".intro").animate({top: "auto"});
                
                $("." + sec).fadeToggle(1000);

            } else {
                $("." + sec).hide();
                $(".intro").animate({bottom: "auto"});
            }
        });
    });
});
