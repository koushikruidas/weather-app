import React from 'react';

function UserInput(props){
    return(
        <div className="user-input">
            <label>
                Enter City Name
                <input 
                    name="cityName" 
                    placeholder="Enter" 
                    value={props.data.cityName} 
                    type="text"
                    onChange={props.handleChange}
                    autoComplete="off"
                />
            </label>
            <button onClick={props.handleSubmit} value={props.data.apiKey}>Submit</button>
            <p>City Name: {props.data.cityName}</p>
            <p>Current Temperature: {props.data.currentTemp} deg celsius</p>
            <p>Maximum Temp: {props.data.maxTemp} deg celsius</p>
            <p>Mininum Temperature: {props.data.minTemp} deg celsius.</p>
            <p>humidity: {props.data.humidity}%</p>
            <p>Air Pressure: {props.data.airPressure} mb</p>
            <p>Sunrise: {props.data.sunRise}</p>
            <p>Sunset {props.data.sunSet}</p>
        </div>
    )
}

export default UserInput;