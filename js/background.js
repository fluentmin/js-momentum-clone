const images = [
    "https://i0.wp.com/512pixels.net/downloads/macos-wallpapers-thumbs/10-7--thumb.png?w=640&ssl=1",
     "https://i0.wp.com/512pixels.net/downloads/macos-wallpapers-thumbs/10-10--thumb.jpg?w=640&ssl=1",
      "https://i0.wp.com/512pixels.net/downloads/macos-wallpapers-thumbs/10-13--thumb.jpg?w=640&ssl=1",
      "https://i0.wp.com/512pixels.net/downloads/macos-wallpapers-thumbs/10-9--thumb.jpg?w=640&ssl=1"
];

const chosenImage = images[Math.floor(Math.random() * quotes.length)];

//const bgImage = document.createElement("img");

//bgImage.src = `${chosenImage}`;

//document.body.appendChild(bgImage);

document.body.style.background = `url(${chosenImage})`
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";