function playSound(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio){
        return;
    }
    audio.currentTime = 0;
    audio.play()
    console.log("play")
    key.classList.add("playing");

    // console.log(keys)
}

function removeTransaction(e){
    if(e.propertyName!=="transform"){
        return;
    }
    this.classList.remove("playing")
}



const keys = document.querySelectorAll(".key");
// console.log(keys)
keys.forEach(key=>{key.addEventListener("transitionend",removeTransaction)
console.log("apples1")});
document.addEventListener("keydown", playSound )