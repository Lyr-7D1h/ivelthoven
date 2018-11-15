
$(function () {
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
    console.log("CLIENT JS LOADED");
});
