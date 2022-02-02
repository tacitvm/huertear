//Navbar resizing on scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    document.getElementsByTagName('header').style.height = '8vh';
    document.getElementById('web-name').style.height = '40%';
}




}
