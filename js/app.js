// La funcionalidad de tu proyecto
// Initialize affix and add an offset to add affix class on scroll
$('#mainNav').affix({
  offset: {
    top: 100
  }
})
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}