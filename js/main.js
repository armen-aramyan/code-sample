/**
 * Mobile Menu Button Effect
 */
var anchor = document.querySelectorAll('.navbar-toggle');

[].forEach.call(anchor, function(anchor){
    var open = false;
    anchor.onclick = function(event){
        event.preventDefault();
        if(!open){
            this.classList.add('close');
            open = true;
        }
        else{
            this.classList.remove('close');
            open = false;
        }
    }
});