let greeting_text = () => {
    let load = $("#title_description");
    load.hide();
    load.html("Well hello there");
    load.fadeIn(3000, ()=> {
        load.hide()
        load.html("This is my portfolio");
        load.fadeIn(3000, () => {
            load.hide();
            load.html("Just relax and read whatever you want.. ;)");
            load.fadeIn(5000, () => {
                load.hide();
                $("#title_description_text").fadeIn(3000, );
            })
        })
    })
}


$(function () {
    greeting_text();
    $(".menu").hide();
    let menu_button = $("#pages_menu");
    menu_button.click(() => {
        if (!(menu_button.hasClass("clicked"))) {
            menu_button.addClass("clicked");
            menu_button.animate({bottom: '50%'});
            $(".menu").fadeIn();
            $(".menu").animate({bottom: '0'}, 3000);
        } else {
            menu_button.removeClass("clicked");
            menu_button.animate({bottom: '0'}, 1000);
            $(".menu").animate({bottom: '-35%'}, 3000);
            $(".menu").fadeOut();
        }
    })
    console.log("CLIENT JS LOADED");
});
