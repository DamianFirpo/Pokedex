const backgrounds = [
    "/images/mid-1.png",
    "/images/mid-2.png",
    "/images/mid-3.png",
    "/images/mid-4.png",
    "/images/mid-5.png",
    "/images/mid-6.png",
    "/images/poketierno.png"
  ];
  
  function cambiarFondo() {
    let currentBackgroundIndex = 0;
    const lastBackgroundIndex = localStorage.getItem("lastBackgroundIndex");
    
    if (lastBackgroundIndex !== null) {
      currentBackgroundIndex = (parseInt(lastBackgroundIndex, 10) + 1) % backgrounds.length;
    }
    
    document.body.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
    
    localStorage.setItem("lastBackgroundIndex", currentBackgroundIndex.toString());
  }
  
  window.onload = function() {
    cambiarFondo();
  };
  