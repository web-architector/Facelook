const hamburgerBtn = document.querySelector('.hamburger');
const menuSidebar = document.querySelector('.menu-sidebar');
hamburgerBtn.onclick= ()=>{
    console.log('###: pressed hamburger= ', 666 );
    console.log('###: menuSidebar= ', menuSidebar);
    menuSidebar.classList.toggle('active');
}
