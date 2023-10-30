//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

// include your styles into the webpack bundle
import "../styles/index.css";
import propTypes from "prop-types";



function TimeCounter(props){
    return( 
    <div className="entireCounter">
        <div className="clockIcon">
            <FontAwesomeIcon icon={faClock} />
        </div>
        <div className="thousandsPlace">{props.digitThousand % 10}</div>
        <div className="hundredsPlace">{props.digitHundred % 10}</div>
        <div className="tensPlace">{props.digitTen % 10}</div>
        <div className="onesPlace">{props.digitOne % 10}</div>
    </div>);
};

TimeCounter.propTypes = {
    digitOne: propTypes.number,
    digitTen: propTypes.number,
    digitHundred: propTypes.number,
    digitThousand: propTypes.number
};

let counter = 0;
setInterval(function(){
    const One = Math.floor(counter/1);
    const Ten = Math.floor(counter/10);
    const Hundred = Math.floor(counter/100);
    const Thousand = Math.floor(counter/1000);
    console.log(Thousand, Hundred, Ten, One)
    counter++;
    ReactDOM.render(<TimeCounter digitOne={One} digitTen={Ten} digitHundred={Hundred} digitThousand={Thousand}/>, 
    document.querySelector("#app")
    );
}, 1000);


