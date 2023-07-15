window.onload = function () {
    var images = document.getElementsByClassName("ajedrez-image");
    for (var image of images) {
        image.addEventListener("mouseover", function () {
            this.style.transform = "scale(2)";
            this.style.zIndex = "1";
            this.parentNode.querySelector("h2").style.zIndex = "2";
            this.parentNode.querySelector("p").style.marginTop = "100px";
        });
        image.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
            this.style.zIndex = "auto";
            this.parentNode.querySelector("p").style.marginTop = "auto";
            this.parentNode.querySelector("h2").style.zIndex = "auto";
        });
    }
};