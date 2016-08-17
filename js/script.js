/*Nina Kong*/

$(document).ready(function() {
    $("#content2").append("after the content");
    $("#content3").prepend("Before the content");
    $(".Practice p:first").appendTo(".Practice p:last");
    $("#content4").prependTo("#content6");

    $("#content2").after("--");
    $("#content4").before("**");
    $("<p>New content</p>").insertAfter(".Practice p:last");
    $("<p>New content</p>").insertBefore(".Practice"); 
    var windowHeight = $( window ).height();
    var con = $(".Content");
    con.parentsUntil($("body")).css("height", windowHeight);
});
