function toggleMenu() {
    var menuItems = document.getElementById('menu-items');
    var dropdownIcon = document.getElementById('dropdown');
    
    if (menuItems.style.display === 'none' || menuItems.style.display === '') {
        menuItems.style.display = 'block';
        dropdownIcon.classList.remove('fa-caret-right');
        dropdownIcon.classList.add('fa-caret-down');
    } else {
        menuItems.style.display = 'none';
        dropdownIcon.classList.remove('fa-caret-down');
        dropdownIcon.classList.add('fa-caret-right');
    }
}


function searchItems() {
    var input, filter, ul, li, i, txtValue, div;
    input = document.getElementById('search-bar');
    filter = input.value.toUpperCase();
    ul = document.getElementById('menu-items');
    li = ul.getElementsByTagName('li');
    div = document.getElementsByClassName('container')

    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}




