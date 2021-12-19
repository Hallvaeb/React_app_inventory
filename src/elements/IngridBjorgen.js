import React from 'react';
import '../App.css';
import Date from 'Date';

var birthday = "2000"

function IngridBjorgen() {
    return (
        <div>
            <h1> Ingrid Bjørgen </h1>
            <h3> Lillesøster </h3>
            <h3> Født {birthday} </h3>

            <input type="text" placeholder='God egenskap'></input>
            <button type="button" onClick={legg_til_egenskap()}>Legg til</button>
        </div>
    );
}

function legg_til_egenskap() {
    var prev_table = document.getElementById("sampleTable").insertRow(-1);
    var table_col1 = prev_table.insertCell(0);
    var table_col2 = prev_table.insertCell(1);
    table_col1.innerHTML = "New Cell 1"
    table_col2.innerHTML = "New Cell 2"

}

export default IngridBjorgen;