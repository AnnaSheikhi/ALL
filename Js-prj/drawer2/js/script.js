const drawer = document.querySelector('.drawer');
const head = document.querySelector('.head');
let drawerStat = 0;

function openedDrawer() {
    if (drawerStat === 0) {
        drawer.classList.add("openedDrawer");
        head.classList.add("openedText"); // 
        drawerStat = 1;
    } else {
        drawer.classList.remove("openedDrawer");
        head.classList.remove("openedText"); // 
        drawerStat = 0;
    }
}
