var elements = document.getElementsByTagName('script')

Array.prototype.forEach.call(elements, function(element) {
  if (element.type.indexOf('math/tex') != -1) {
     // Extract math markdown
     var textToRender = element.innerText || element.textContent;

     // Create span for KaTeX
     var katexElement = document.createElement('span');

     // Support inline and display math
     if (element.type.indexOf('mode=display') != -1){
       katexElement.className += "math-display";
       textToRender = '\\displaystyle {' + textToRender + '}';
     } else {
       katexElement.className += "math-inline";
     }

     katex.render(textToRender, katexElement);
     element.parentNode.insertBefore(katexElement, element);
  }
});


// Add event listener to resize demo videos
window.addEventListener("resize", resizeFrame());

function resizeFrame(){
    var w = window.outerWidth;
    var h = window.outerHeight;
    var vidWidth = w/2;
    var vidHeight = vidWidth/1.5;
      
    var x = document.getElementsByTagName("iframe");
    for (var i = 0; i < x.length; i++) {
        x[i].style.maxWidth = vidWidth+"px";
        x[i].width = vidWidth;
        x[i].style.maxHeight = vidHeight+"px";
        x[i].height = vidHeight;
        }
}

