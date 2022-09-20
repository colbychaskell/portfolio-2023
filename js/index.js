$(document).ready(function() {
    $(".fade1").fadeIn(500)
    $(".fade2").fadeIn(1000)

    $(".project-display").hover(function() {
        $("img", this).animate({opacity: 0.3}, 200);
        $("p", this).fadeIn()
    }, function() {
        $("img", this).animate({opacity: 1}, 200);   
        $("p", this).fadeOut()
    });

    $(".view-github").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });
});