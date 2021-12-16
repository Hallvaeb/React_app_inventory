import React from 'react';
import '../App.css';

// Gikk ikke å bruke visibility hidden på present_container
function ErikBjorgen() {
  return (
    <div> 
      <h1> Erik Bjørgen </h1>
      <h3> Storebror </h3>
      <h3> Født 15 oktober 1994 </h3><br></br>
      <p> Julegave: </p>
      <div id="present_container"></div>
      <button type="button" onClick={revealPresent()}>Avslør julegave</button>
    </div>
  );
}

function revealPresent(){
  var present_container = document.getElementById("present_container");
  if (present_container.innerHTML === ""){
    present_container.innerHTML = "Det får du vite på juleaften!";
  }
  else{
    present_container.innerHTML = "";
  }
}

export default ErikBjorgen;
