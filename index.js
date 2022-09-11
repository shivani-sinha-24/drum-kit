let audio = new Audio("");

document.querySelectorAll(".drum").forEach((e) => {
  e.addEventListener("click", (e) => {
    let value= e.target.id;
    makeSound(value);
    animation(value);    
  });
});

document.addEventListener("keypress", (e) => {
    let value=e.key;
    makeSound(value);
    animation(value);
});


function makeSound(key){

    switch (key) {
        case "w":
          audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "a":
          audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        case "s":
          audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
        case "d":
          audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
        case "j":
          audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "k":
          audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "l":
          audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
        default:
          audio = new Audio("")  
          break;
      }
      
    
}

function animation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}