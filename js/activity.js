$(document).ready(function() {
    $("td:not(:first-child)").click(function() {
        if ($(this).text() != "Not Available") {
            if ($(this).css('font-weight') == "bold" || $(this).css('font-weight') == "700") {
                $(this).removeAttr("style");
            } else {
                $(this).css("background-color", "green");
                $(this).css("color", "white");
                $(this).css("font-weight", "bold");
                $(this).css("cursor", "grab");
            }
        }
    });
})