const images = ["1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * quotes.length)];

//const bgImage = document.createElement("img");

//bgImage.src = `${chosenImage}`;

//document.body.appendChild(bgImage);

document.body.style.background = `url(images/${chosenImage})`
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";