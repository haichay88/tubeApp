
$(document).ready(function () {
    $(".side-opener").on({
        click: function (n) {
            n.preventDefault();
            $("body").toggleClass("sideactive")
        }
    });
});