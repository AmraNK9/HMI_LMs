export function navbar() {
    window.onscroll = function () {
        myFunction()
    };

    var notiContainer = document.getElementById("noti-container-id");
    var navbar = document.querySelector('.navbar');

    function myFunction() {
        console.log("it scroll")
        if (window.pageYOffset >= notiContainer.offsetHeight) {
            navbar.classList.add("fixed-top");
            navbar.classList.add("border-bottom");
        } else {
            navbar.classList.remove("fixed-top");
            navbar.classList.remove("border-bottom");
        }
    }

    window.onload = function () {
        window.scrollTo(0, 0);
    };
}
