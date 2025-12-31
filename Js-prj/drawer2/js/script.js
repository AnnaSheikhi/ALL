const drawer = document.querySelector('.drawer')
let drawerStat = 0
function openedDrawer() {
    if (drawerStat === 0) {
        console.log(drawer);
        
        drawer.classList.add("openedDrawer");
    drawerStat = 1;

} else {
        drawer.classList.remove("openedDrawer");
    drawerStat = 0;
}
}