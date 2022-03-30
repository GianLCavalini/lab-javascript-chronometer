const chronometer = new Chronometer();

console.log(chronometer);

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {

  printMinutes();
  printSeconds();

  

}

function printMinutes() {
  
   const minutos = chronometer.getMinutes()
   minUniElement.innerText = chronometer.computeTwoDigitNumber(minutos)[1];
   minDecElement.innerText = chronometer.computeTwoDigitNumber(minutos)[0];

}

function printSeconds() {

  const segundos = chronometer.getSeconds()
  console.log(segundos);

  secUniElement.innerText = chronometer.computeTwoDigitNumber(segundos)[1];
  secDecElement.innerText = chronometer.computeTwoDigitNumber(segundos)[0];
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {


  splitsElement = chronometer.slip();


}

function clearSplits() {



  splitsElement.innerText = " ";
  



}




function setStopBtn() {

  chronometer.stop()

  btnLeftElement.innerText = "START"
  btnLeftElement.classList.toggle("start")
  btnLeftElement.classList.toggle("stop")

  btnRightElement.innerText = "RESET"  
  btnRightElement.classList.toggle("reset")
  btnRightElement.classList.toggle("split")


}






function setSplitBtn() {

  let linha = document.createElement("li");

  linha.innerText = chronometer.split();

  splitsElement.appendChild(linha);
  

  
  
}

function setStartBtn() {

  chronometer.start(printTime);

    btnLeftElement.innerText = "STOP";
    btnLeftElement.classList.toggle("stop");
    btnLeftElement.classList.toggle("start");
    


    btnRightElement.innerText = "SPLIT"
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle("split");

}



function setResetBtn() {

  chronometer.reset()

 minDecElement.innerText = "0";

 minUniElement.innerText = "0";
 secDecElement.innerText = "0";
 secUniElement.innerText = "0";

 splitsElement.innerText = " ";
 
}




btnLeftElement.addEventListener('click', () => {
console.log(btnLeftElement.innerText)

if(btnLeftElement.innerText === "START" ){
  setStartBtn();
}

else {
 setStopBtn();
}


});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if(btnRightElement.innerText === "RESET"){
    setResetBtn()
  }
  if(btnRightElement.innerText === "SPLIT"){
    setSplitBtn()
  }
  
});
