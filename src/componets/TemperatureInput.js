import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}
export default function Calculator(props) {
    const {  onTemperatureChange, temperature , scale } = props;
    return (

        <fieldset>
            <legend>Enter the temperature in {scaleNames[scale]}: </legend>
            <input type="text" value={temperature} onChange={(e) => onTemperatureChange(e,scale)} />
        </fieldset>
    
    
    )
}