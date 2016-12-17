$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});

//Banner Slides
var myIndex = 0;
slide();

function slide() {
    var i;
    var x = document.getElementsByClassName("banners");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(slide, 2000); // Change image every 2 seconds
}
//end of banner slides

//news ticker

function ticker() {
  $('#ticker li:first').slideUp(function() {
      $(this).appendTo($('#ticker')).slideDown();
  });
}

setInterval(function(){ ticker(); }, 3000);

//end of news tickr

//Navbar scroll effect
$(document).ready(function(){

var myNavBar = {

flagAdd: true,

elements: [],

init: function (elements) {
    this.elements = elements;
},

add : function() {
    if(this.flagAdd) {
        for(var i=0; i < this.elements.length; i++) {
            document.getElementById(this.elements[i]).className += " fixed-theme";
        }
        this.flagAdd = false;
    }
},

remove: function() {
    for(var i=0; i < this.elements.length; i++) {
        document.getElementById(this.elements[i]).className =
                document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
    }
    this.flagAdd = true;
}

};
myNavBar.init(  [
"header",
"header-container",
"brand"
]);
function offSetManager(){

var yOffset = 0;
var currYOffSet = window.pageYOffset;

if(yOffset < currYOffSet) {
    myNavBar.add();
}
else if(currYOffSet == yOffset){
    myNavBar.remove();
}

}
window.onscroll = function(e) {
offSetManager();
}
offSetManager();
});
//end of scroll effect
