function toggleSidebar() {
    const sidebar = document.getElementById('side');
    const backdrop = document.querySelector('.sidebar-backdrop');

    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-20em';
        backdrop.style.display = 'none';
        backdrop.style.opacity = '0';
    } else {
        sidebar.style.right = '0px';
        backdrop.style.display = 'block';
        backdrop.style.opacity = '1';
    }
}

document.querySelector('.menu-btn').addEventListener('click', toggleSidebar);
document.querySelector('.menu-btn-mobile').addEventListener('click', toggleSidebar);
document.querySelector('.close-btn').addEventListener('click', toggleSidebar);
document.querySelector('.sidebar-backdrop').addEventListener('click', toggleSidebar);