const hamburgerBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.nav');

let showSidebar = false;
function toggleSidebar() {
  if (showSidebar) {
    hamburgerBtn.classList.remove('open');
    sidebar.classList.remove('open');

    showSidebar = false;
  } else {
    hamburgerBtn.classList.add('open');
    sidebar.classList.add('open');

    showSidebar = true;
  }
}

hamburgerBtn.addEventListener('click', toggleSidebar);
