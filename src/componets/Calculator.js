import React from 'react';
import { convert, toCelsius, toFahrenheit } from '../lib/convert';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component{
    state = {
        temperature: '',
        scale: ''
    };

    handleChange = (e,scale) =>{
        this.setState({
            temperature: e.target.value,
            scale: scale,
        })
    }

    render(){
        const { temperature, scale } = this.state;

        const celsius = scale === 'f' ? convert(temperature,toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature,toFahrenheit) : temperature;

        return (
            <>
           <TemperatureInput scale = 'c' temperature={celsius} onTemperatureChange={this.handleChange} />
           <TemperatureInput scale = 'f' temperature={fahrenheit} onTemperatureChange={this.handleChange} />
            <BoilingVerdict  celsius={parseFloat(temperature)}/>
            </>
        )
    }

}