function toggleMenu() {
    var menuItems = document.getElementById('menu-items');
    var dropdownIcon = document.getElementById('dropdown-icon');
    
    if (menuItems.style.display === 'none' || menuItems.style.display === '') {
        menuItems.style.display = 'block';
        dropdownIcon.textContent = '▼'; // Change to down arrow
    } else {
        menuItems.style.display = 'none';
        dropdownIcon.textContent = '►'; // Change to right arrow
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




