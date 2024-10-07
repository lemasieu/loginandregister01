document.addEventListener("DOMContentLoaded", function() {
    let hopphai = document.querySelector('.dtdangky');
    let hoptrai = document.querySelector('.dtdangnhap');

    let linkphai = document.querySelector('#nhayphai');
    let linktrai = document.querySelector('#nhaytrai');

    function doihop() {
        hopphai.classList.toggle("andk");
        hoptrai.classList.toggle("hiendk");
    }

    linktrai.addEventListener("click", doihop);
    linkphai.addEventListener("click", doihop);
});