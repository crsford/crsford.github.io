function carousel() {
    var container = document.getElementById('carousel_container'), getImg = container.getElementsByTagName('img'), body = document.getElementsByTagName('body'), log = document.getElementById('log'), page = document.getElementsByClassName('page-content'), img = container.getElementsByTagName('img'), img1 = img[0], img2 = img[1], img3 = img[2], img4 = img[3], img5 = img[4], li = container.getElementsByTagName('li'), li1 = li[0], li2 = li[1], li3 = li[2], li4 = li[3], li5 = li[4], ul = container.getElementsByTagName('ul')[0];

    function book(name, src) {
        this.name = name;
        this.src = src;
        this.type = 'img';
    }
    var books = new Array();
        books[0] = new book('Snow', './img/snow_inset_carousel.png');
        books[1] = new book('Ocean\'s Child', './img/oceans_child_carousel.png');
        books[2] = new book('The Soldier\'s Night Before Christmas', './img/soldiers_carousel.png');
        books[3] = new book('The Sailor\'s Night Before Christmas', './img/navy_carousel.png');
        books[4] = new book('Scout', './img/scout_carousel.png');

    ul.addEventListener('onload', function() {
        this.removeChild(li[0])
    }, false)

    ul.addEventListener('onload', function() {
      li1.cloneNode()
       
    })
     var setType = function(tag) {
            this.type = tag;
        }
        var setName = function(name) {
            this.name = name;
        }
        var setSrc = function(src) {
            this.src = src;
        }

        var createImgTag = function(tag) {
        this.tag = document.createElement('img');
    }
    var getImgTag = function(tag) {
        this.tag = document.getElementsByTagName('img');
    }
    var setImgTag = function(element) {
        this.tag = element.appendChild('img');
    }
   function createCarousel(id) {
    var createCarousel = document.createElement('div');
    createCarousel.setAttribute('id', id);
    var createPage = document.getElementsByClassName('page-content');
    var page = createPage[0].appendChild(createCarousel);
    var createList = document.createElement('ul');
    var list = page.appendChild(createList);
    var createItem = document.createElement('li');
    var item = list.appendChild(createItem);
    function getItem() {
        this.item = item;
    }
}

function setBook(book) {
    getItem();
     item.innerHTML = function(book) {
            book.name + '<br>';
        }
    var createImgElement = document.createElement('img');
    var imgElement = function(book) {
        item.appendChild(createImgElement);
        imgElement.setAttribute('src', book.src)
    }   
}
};
