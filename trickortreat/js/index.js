const imageUrls = [
    'https://t4.ftcdn.net/jpg/04/49/89/43/360_F_449894345_VKGjTTEQAoHcQsR82ro5gZxfeuOjQvko.jpg', //snickers
    'https://www.candywarehouse.com/cdn/shop/files/milky-way-candy-bars-36-piece-box-candy-warehouse-1.jpg?v=1689310168',//milky way
    'https://shop.sweetiescandy.com/cdn/shop/products/IMG_0694_640x480.jpg?v=1588338367',//skittles
    'https://i.pinimg.com/originals/36/f4/d5/36f4d592013f5d06a020a13023108b6c.jpg',//bottle caps
    'https://www.mastgeneralstore.com/prodimages/73482-DEFAULT-l.jpg'//starburst
];

function pickRandomCandy(){
   const container = document.getElementById('imageContainer');
   while (container.firstChild) {
    container.removeChild(container.firstChild);
}
   const randomIndex = Math.floor(Math.random() * imageUrls.length);
   const img = document.createElement('img');
   img.src = imageUrls[randomIndex];
   img.alt = 'Candy';
   container.appendChild(img);
}
