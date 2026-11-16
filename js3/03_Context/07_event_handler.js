// Vermeiden
element.addEventListener('click', function () {
    this.classList.add('active');
});

// Bevorzugen
element.addEventListener('click', function (event) {
    event.currentTarget.classList.add('active');
});