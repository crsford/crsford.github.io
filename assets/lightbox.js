function lightbox() {

    var 
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
        img[0].onclick = function(c) {
            var getImg = c.target;
            lightbox.style.width = '800px';
            lightbox.style.height = '600px';
            lightbox.style.marginLeft = 'auto';
            lightbox.style.marginRight = 'auto';
            lightbox.style.position = 'absolute';
            lightbox.style.left = '200px';
            lightbox.style.top = '100px';
            home.appendChild(lightbox);
            lightbox.appendChild(getImg);
            getImg.style.width = '600px';
            getImg.style.height = '400px';
            getImg.style.marginLeft = 'auto';
            getImg.style.marginRight = 'auto';
        }
}
