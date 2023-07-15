var squares = document.querySelectorAll('.square');

squares.forEach(function (square) {
    square.addEventListener('mouseover', function () {
        this.classList.add('selected');
    });

    square.addEventListener('mouseout', function () {
        this.classList.remove('selected');
    });
});