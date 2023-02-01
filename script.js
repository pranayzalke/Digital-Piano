const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");


let allKeys = [],
 audio = new Audio("tunes/a.wav");//bt default,audio src is "a" tune

 const playTune = (key) => {

    //passing audio src based on key pressed
    audio.src = `tunes/${key}.wav`;
    audio.play();
    // console.log(allKeys);


    //getting clicked key element
    const clickedKey = document.querySelector(`[data-key = "${key}"]`);

    //adding active class to the clicked key element
    clickedKey.classList.add("active");

    //removing active class after 150ms from clicked key element
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}


pianoKeys.forEach(key => {

    //adding data-key value to allkeys arrays
    allKeys.push(key.dataset.key);
    //calling playTune fun with passing data-key value as a argument
    key.addEventListener("click", () => playTune(key.dataset.key));
    // console.log(key.dataset.key);
});

const DisplyKeys = () =>{
    //toggling hide class from each key on checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const handleVolume = (e) => {
    //passing range slider value as a audio volume
    audio.volume = e.target.value;
}


const pressedKey = (e) => {
    //console.log(e);
    //if pressed key is in the allKeys array, only call the playTune fun
    if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click",DisplyKeys);
volumeSlider.addEventListener("input",handleVolume);
document.addEventListener("keydown",pressedKey);