const button = document.querySelector("button");
const output = document.querySelector(".output");
is_open = 0;


button.addEventListener('click', function() {
    if(!is_open) {
    output.innerHTML = 'Я люблю кушать';
    is_open = 1;
    } else {
        output.innerHTML = 'Пошутил';
        is_open = 0;
    }
});