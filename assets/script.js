AOS.init({
    duration: 900,
    easing: 'slide-up',
    once: true,
    anchorPlacement: 'top-bottom'
});

// $(".navbar-toggler").hover(function () {
//     $("#navbarToggleExternalContent").addClass("show")
// }, function () {
//     $("#navbarToggleExternalContent").remove("show")
// }
// );

// $(".navbar-toggler").toggleClass(
//     function () {
//         $("#navbarToggleExternalContent").addClass("show");
//     }, function () {
//         $("#navbarToggleExternalContent").removeClass("show");
//     }
// );

$(".navbar-toggler").on("click", function () {
    const button = $(".navbar-toggler");


    $("#navbarToggleExternalContent").toggle("slow", function () {
        if ($(this).is(":visible")) {
            button.text("Hide")
        } else {
            button.text("Read more")
        }
    })
})