
$(document).ready(function () {

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      // tslint:disable-next-line:prefer-const
      let dropdowns = $('.dropdown-content');
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    } else {
      $('#myDropdown').addClass('show');
    }
  };
});
