import React from 'react';
import '../App.css';
// import Date from 'Date';

const birthday = new Date(1994, 10, 15);

// Gikk ikke å bruke visibility hidden på present_container
// Hvorfor ber <br> om closing tag iblant?
// Hvorfor er øverste function blåfarget, mens de andre hvite?
function ErikBjorgen() {
  return (
    <div>
      <h1> Erik Bjørgen </h1>
      <h3> Storebror </h3>
      <h3> Født {birthday} </h3>
      <p> Erik har nå levd i {calcMinutesAlive({ birthday })} minutter!</p>
      <p> Julegave: </p>
      <div id="present_container"></div>
      <button type="button" onClick={revealPresent()}>Avslør julegave</button>
    </div>
  );
}

function revealPresent() {
  var present_container = document.getElementById("present_container");
  if (present_container.innerHTML === "") {
    present_container.innerHTML = "Det får du vite på juleaften!";
  }
  else {
    present_container.innerHTML = "";
  }
}

function calcMinutesAlive(birthday) {
  // ms siden 1970 til bursdagen
  const time_bday = birthday.getTime();
  // ms siden 1970
  const time_now = Date.now();
  const diffTime = time_now - time_bday;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffTime + " milliseconds");
  console.log(diffDays + " days");
  return 1;
}

export default ErikBjorgen;

