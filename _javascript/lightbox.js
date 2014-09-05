function lightbox() {
    "use strict";
    var container = document.getElementById('carousel_container');
    container.onclick = function(x) {
        var thisImg = x.target;
     //   if(thisImg.getAttribute('class') === '.lightbox_trigger') {
            createFrame();
     //   }
         function setImg(img) {
            img = thisImg;
        }
    };

    function createFrame() {
        var wrapper = document.getElementsByClassName('wrapper')[1];
        var frame = document.createElement('div');
        frame.setAttribute('id', 'lightbox');
        frame.style.width = '600px';
        frame.style.height = '600px';
        frame.style.marginLeft = 'auto';
        frame.style.marginRight = 'auto';
        frame.style.marginTop = '60px';
        frame.innerHTML = setImg(document.getElementsByTagName('img')[0]);
    }

    function enlargeImg() {
        img.style.width = '600px';
        img.style.height = '600px';
        img.style.marginLeft = 'auto';
        img.style.marginRight = 'auto';
        img.style.marginTop = 'auto';
    }

}