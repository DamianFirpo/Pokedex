var images = [
    "./images/index2.png",
    "./images/index4.png",
    "./images/index5.png",
    "./images/index6.png",
    "./images/index7.png",
    "./images/index8.png",
    "./images/index9.png",
   
  ];
  
  var randomIndex = Math.floor(Math.random() * images.length);
  document.body.style.backgroundImage = "url('" + images[randomIndex] + "')";
  