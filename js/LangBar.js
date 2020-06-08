$(document).ready(function () {
    $(".lang-flag").click(function () {
        $(".language-dropdown").toggleClass("open");
    });
    $("ul.lang-list li").click(function () {
        $("ul.lang-list li").removeClass("selected");
        $(this).addClass("selected");
        if ($(this).hasClass('lang-en')) {
            $(".language-dropdown").find(".lang-flag").addClass("lang-en").removeClass("lang-Ar");
        } else if ($(this).hasClass('lang-Ar')) {
            $(".language-dropdown").find(".lang-flag").addClass("lang-Ar").removeClass("lang-en");
        }
        $(".language-dropdown").removeClass("open");
    });
})