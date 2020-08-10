import './styles.css';
window.onscroll = function() {myFunction()};
var navi = document.getElementById('selectorDiv');
var sticky = selectorDiv.offsetTop;
function myFunction(){
    if (windowPageYOffset >= sticky){
        navi.classList.add(sticky);
    } else {
        navi.classList.remove(sticky);
    }
}